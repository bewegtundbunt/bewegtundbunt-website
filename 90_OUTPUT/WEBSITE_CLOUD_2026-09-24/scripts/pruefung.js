// Browserprüfung A01 · bewegt & bunt · lokale Arbeitsfassung
// Aufruf: NODE_PATH=/opt/node22/lib/node_modules node pruefung.js   (Server: python3 -m http.server 8765 im Repo-Root)
// Jede Messung erst nach document.fonts.ready und vollständig geladenen Bildern.
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const BASE = process.env.BASE || 'http://127.0.0.1:8765';
const OUT = path.resolve(__dirname, '..');
const SHOTS = path.join(OUT, 'screenshots');
const DATA = path.join(OUT, 'messdaten');
fs.mkdirSync(SHOTS, { recursive: true });
fs.mkdirSync(DATA, { recursive: true });

const PAGES = ['/index.html', '/about.html', '/contact.html'];
const WIDTHS = [320, 360, 390, 768, 1440];
const HEIGHT = 900;

async function settle(p) {
  return p.evaluate(async () => {
    const t0 = performance.now();
    document.querySelectorAll('img[loading="lazy"]').forEach(i => { i.loading = 'eager'; });
    await Promise.all([...document.images].map(i => (i.complete ? 0 : new Promise(r => { i.addEventListener('load', r, { once: true }); i.addEventListener('error', r, { once: true }); }))));
    await document.fonts.ready;
    await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
    const fonts = [...document.fonts].map(f => ({ family: f.family, weight: f.weight, style: f.style, status: f.status }));
    return { fontsReadyMs: Math.round(performance.now() - t0), fontsStatus: document.fonts.status, fonts,
      checkSora: document.fonts.check('600 16px Sora'), checkDancing: document.fonts.check('600 27px "Dancing Script"'),
      checkSerif: document.fonts.check('italic 25px "Source Serif 4"') };
  });
}


async function waitStable(p) {
  await p.waitForTimeout(120);
  await p.evaluate(() => new Promise(res => { let last = -1, same = 0; const tick = () => { if (scrollY === last) { if (++same >= 5) return res(); } else { same = 0; last = scrollY; } requestAnimationFrame(tick); }; tick(); }));
}

async function newPage(browser, w, h, extra = {}) {
  const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1, ...extra });
  const p = await ctx.newPage();
  const net = { failed: [], bad: [], external: [] };
  p.on('requestfailed', r => net.failed.push(r.url() + ' ' + (r.failure() || {}).errorText));
  p.on('response', r => { if (r.status() >= 400) net.bad.push(r.status() + ' ' + r.url()); });
  p.on('request', r => { if (!r.url().startsWith(BASE) && !r.url().startsWith('data:')) net.external.push(r.url()); });
  return { ctx, p, net };
}

// ---------- Layoutmessung je Seite/Breite ----------
function layoutProbe() {
  const vw = document.documentElement.clientWidth;
  const res = { scrollWidth: document.documentElement.scrollWidth, clientWidth: vw, bodyScrollWidth: document.body.scrollWidth,
    outside: [], textOverflow: [], overlapCards: [], images: [], nav: [], headings: [] };
  for (const el of document.querySelectorAll('body *')) {
    const b = el.getBoundingClientRect();
    if (!b.width || !b.height) continue;
    if (b.right > vw + 0.5 || b.left < -0.5) res.outside.push(`${el.tagName.toLowerCase()}.${el.className} [${Math.round(b.left)}..${Math.round(b.right)}]`);
    const cs = getComputedStyle(el);
    if (el.childElementCount === 0 && el.textContent.trim() && el.scrollWidth > el.clientWidth + 1 && el.clientWidth > 0 && cs.display !== 'inline')
      res.textOverflow.push(`${el.tagName.toLowerCase()}.${el.className}: ${el.scrollWidth}>${el.clientWidth} „${el.textContent.trim().slice(0, 40)}“`);
  }
  // Wortbreiten: jedes Textwort passt in seinen Container (kein abgeschnittenes Wort)
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const range = document.createRange();
  while (walker.nextNode()) {
    const n = walker.currentNode; const parent = n.parentElement;
    if (!n.textContent.trim() || !parent.offsetParent && getComputedStyle(parent).position !== 'fixed' && parent.tagName !== 'BODY') continue;
    let block = parent; while (block && getComputedStyle(block).display === 'inline') block = block.parentElement;
    const pb = block.getBoundingClientRect();
    const cs = getComputedStyle(block);
    const left = pb.left + parseFloat(cs.paddingLeft) - 1, right = pb.right - parseFloat(cs.paddingRight) + 1;
    range.selectNodeContents(n);
    for (const r of range.getClientRects()) {
      if (r.width && (r.left < left || r.right > right)) { res.textOverflow.push(`Wort ragt aus ${block.tagName.toLowerCase()}.${block.className}: „${n.textContent.trim().slice(0, 40)}“`); break; }
    }
  }
  const cardSel = '.area-card, .product-card, .step-card, .feature-card, .type-card, .world-card, .ritual-step';
  const groups = new Map();
  document.querySelectorAll(cardSel).forEach(c => { const k = c.parentElement; if (!groups.has(k)) groups.set(k, []); groups.get(k).push(c.getBoundingClientRect()); });
  for (const rs of groups.values()) for (let i = 0; i < rs.length; i++) for (let j = i + 1; j < rs.length; j++) {
    const a = rs[i], b = rs[j];
    if (a.left < b.right - 0.5 && b.left < a.right - 0.5 && a.top < b.bottom - 0.5 && b.top < a.bottom - 0.5) res.overlapCards.push(`Karte ${i} überlappt ${j}`);
  }
  for (const img of document.images) {
    const b = img.getBoundingClientRect();
    res.images.push({ src: img.getAttribute('src'), alt: img.getAttribute('alt'), complete: img.complete, naturalWidth: img.naturalWidth, naturalHeight: img.naturalHeight,
      attrW: +img.getAttribute('width'), attrH: +img.getAttribute('height'), renderedW: +b.width.toFixed(2), renderedH: +b.height.toFixed(2),
      contentRatio: +((img.clientWidth) / (img.clientHeight)).toFixed(4), naturalRatio: +(img.naturalWidth / img.naturalHeight).toFixed(4),
      objectFit: getComputedStyle(img).objectFit });
  }
  const links = [...document.querySelectorAll('.nav-links a')];
  links.forEach((a, i) => { const b = a.getBoundingClientRect(); res.nav.push({ text: a.textContent.trim(), href: a.getAttribute('href'), current: a.getAttribute('aria-current'), x: Math.round(b.left), y: Math.round(b.top), w: +b.width.toFixed(1), h: +b.height.toFixed(1), visible: b.width > 0 && b.right <= vw && b.left >= 0, fontSize: getComputedStyle(a).fontSize }); });
  res.navOverlap = [];
  for (let i = 0; i < links.length; i++) for (let j = i + 1; j < links.length; j++) {
    const a = links[i].getBoundingClientRect(), b = links[j].getBoundingClientRect();
    if (a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom) res.navOverlap.push(`${i}/${j}`);
  }
  res.header = { height: +document.querySelector('.nav-shell').getBoundingClientRect().height.toFixed(1), position: getComputedStyle(document.querySelector('.nav-shell')).position };
  res.headings = [...document.querySelectorAll('h1,h2,h3,h4')].map(h => h.tagName + ' ' + h.textContent.replace(/\s+/g, ' ').trim());
  res.smallTargets = [...document.querySelectorAll('a, button')].map(a => ({ t: a.textContent.trim().slice(0, 30), h: a.getBoundingClientRect().height })).filter(x => x.h < 44);
  const thumbs = [...document.querySelectorAll('.area-thumbs')];
  res.areaThumbs = thumbs.map(t => { const bs = [...t.querySelectorAll('img')].map(i => i.getBoundingClientRect()); return { box: +t.getBoundingClientRect().height.toFixed(1), imagesUnion: +(Math.max(...bs.map(b => b.bottom)) - Math.min(...bs.map(b => b.top))).toFixed(1), unionWidth: +(Math.max(...bs.map(b => b.right)) - Math.min(...bs.map(b => b.left))).toFixed(1), cardWidth: +t.parentElement.getBoundingClientRect().width.toFixed(1) }; });
  const ac = [...document.querySelectorAll('.area-card')].map(c => c.getBoundingClientRect());
  res.areaCardsColumns = ac.length ? new Set(ac.map(r => Math.round(r.top))).size === 1 ? 'nebeneinander' : 'untereinander' : null;
  res.areaCardsBottom = ac.length ? Math.round(Math.max(...ac.map(r => r.bottom)) + scrollY) : null;
  const pr = [...document.querySelectorAll('.product-row')].map(r => getComputedStyle(r).gridTemplateColumns.split(' ').length);
  res.productRowColumns = pr;
  return res;
}

// ---------- Kontrast ----------
function contrastProbe() {
  function parse(c) { const m = c.match(/rgba?\(([^)]+)\)/); if (!m) return null; const p = m[1].split(/[ ,/]+/).filter(Boolean).map(Number); return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 }; }
  function blend(fg, bg) { return { r: fg.r * fg.a + bg.r * (1 - fg.a), g: fg.g * fg.a + bg.g * (1 - fg.a), b: fg.b * fg.a + bg.b * (1 - fg.a), a: 1 }; }
  function bgOf(el) { const stack = []; for (let e = el; e; e = e.parentElement) { const cs = getComputedStyle(e); const c = parse(cs.backgroundColor); if (c && c.a > 0) stack.push(c); if (c && c.a === 1) break; if (cs.backgroundImage !== 'none' && e.classList.contains('hero')) { stack.push({ r: 237, g: 243, b: 230, a: 1 }); break; } } let bg = { r: 255, g: 255, b: 255, a: 1 }; for (let i = stack.length - 1; i >= 0; i--) bg = blend(stack[i], bg); return bg; }
  function lum(c) { const f = v => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }; return 0.2126 * f(c.r) + 0.7152 * f(c.g) + 0.0722 * f(c.b); }
  function ratio(a, b) { const l1 = lum(a), l2 = lum(b); return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05); }
  const sels = ['.nav-links a', 'h1 .hero-line', 'h1 .hero-line-accent', '.positioning', '.hero-text', '.area-card h2', '.area-card p', '.area-link', '.area-caption span', '.kicker', '.section-intro', '.row-title', '.product-id', '.product-card h3', '.product-status', '.row-benefit', '.row-status', '.intro-panel p', '.step-card p', '.ritual-note', '.type-card p', '.section-close', '.ritual-step h3', '.ritual-step p', '.feature-card p', '.world-card p', '.practice-copy p', '.text-link', '.quote-card blockquote', '.button-primary', '.footer-claim', '.footer-contact p', '.footer-contact a', '.footer-bottom span', '.legal a', '.eyebrow', '.copy p', '.contact p', '.email', '.back'];
  const out = [];
  const seen = new Set();
  for (const s of sels) for (const el of document.querySelectorAll(s)) {
    const cs = getComputedStyle(el); const fg0 = parse(cs.color); const bg = bgOf(el); const fg = blend(fg0, bg);
    const size = parseFloat(cs.fontSize), weight = +cs.fontWeight; const large = size >= 24 || (size >= 18.66 && weight >= 700);
    const key = s + '|' + el.closest('section,header,footer,main')?.className + '|' + cs.color;
    if (seen.has(key)) continue; seen.add(key);
    const r = ratio(fg, bg);
    out.push({ selector: s, context: (el.closest('section,header,footer,main') || {}).className || '', color: cs.color, background: `rgb(${Math.round(bg.r)}, ${Math.round(bg.g)}, ${Math.round(bg.b)})`, fontSize: size, weight, large, ratio: +r.toFixed(2), pass: r >= (large ? 3 : 4.5) });
  }
  // Fokuskontur gegen angrenzenden Hintergrund
  const focus = [];
  for (const el of document.querySelectorAll('a')) {
    el.focus({ focusVisible: true });
    const cs = getComputedStyle(el); const oc = parse(cs.outlineColor);
    if (!oc || cs.outlineStyle === 'none') continue;
    const bg = bgOf(el.parentElement); const r = ratio(oc, bg);
    const key = cs.outlineColor + '|' + `${Math.round(bg.r)},${Math.round(bg.g)},${Math.round(bg.b)}`;
    if (!focus.find(f => f.key === key)) focus.push({ key, example: el.textContent.trim().slice(0, 30), outline: `${cs.outlineWidth} ${cs.outlineStyle} ${cs.outlineColor}`, background: `rgb(${Math.round(bg.r)}, ${Math.round(bg.g)}, ${Math.round(bg.b)})`, ratio: +r.toFixed(2), pass: r >= 3 });
    el.blur();
  }
  return { text: out, focus };
}

(async () => {
  const browser = await chromium.launch();
  const report = { startedAt: new Date().toISOString(), base: BASE, browser: browser.version(), viewportHeight: HEIGHT, deviceScaleFactor: 1, layout: [], anchors: [], navFromSubpages: [], links: [], keyboard: [], reducedMotion: [], zoom200: [], contrast: {}, dom: {}, text: {}, screenshots: [] };

  // 1) 15 Seite/Breite-Kombinationen + 390×844
  for (const w of WIDTHS.concat([390])) {
    const h = (w === 390 && report.layout.some(l => l.width === 390)) ? 844 : HEIGHT;
    for (const pg of PAGES) {
      if (h === 844 && pg !== '/index.html') continue;
      const { ctx, p, net } = await newPage(browser, w, h);
      await p.goto(BASE + pg, { waitUntil: 'load' });
      const fonts = await settle(p);
      const lay = await p.evaluate(layoutProbe);
      // nach kurzer Wartezeit erneut messen (stabil geladene Schriften)
      await p.waitForTimeout(300);
      const lay2 = await p.evaluate(() => ({ sw: document.documentElement.scrollWidth, h: document.documentElement.scrollHeight }));
      report.layout.push({ page: pg, width: w, height: h, fonts, ...lay, remeasure: lay2, net });
      await ctx.close();
    }
  }

  // 2) DOM-Struktur, Produktkarten, IDs, Texte
  {
    const { ctx, p } = await newPage(browser, 1440, HEIGHT);
    for (const pg of PAGES) {
      await p.goto(BASE + pg, { waitUntil: 'load' }); await settle(p);
      report.text[pg] = await p.evaluate(() => ({
        title: document.title,
        description: document.querySelector('meta[name=description]').content,
        innerText: document.body.innerText,
        ariaLabels: [...document.querySelectorAll('[aria-label]')].map(e => ({ tag: e.tagName.toLowerCase(), id: e.id, label: e.getAttribute('aria-label') })),
        labelledby: [...document.querySelectorAll('[aria-labelledby]')].map(e => ({ tag: e.tagName.toLowerCase(), id: e.id, name: e.getAttribute('aria-labelledby').split(' ').map(i => document.getElementById(i)?.textContent.replace(/\s+/g, ' ').trim()).join(' ') })),
        links: [...document.querySelectorAll('a')].map(a => ({ text: a.textContent.replace(/\s+/g, ' ').trim(), href: a.getAttribute('href'), current: a.getAttribute('aria-current') })),
        ids: [...document.querySelectorAll('[id]')].map(e => e.id),
        tabindex: [...document.querySelectorAll('[tabindex]')].map(e => e.outerHTML.slice(0, 80)),
        h1count: document.querySelectorAll('h1').length,
      }));
    }
    await p.goto(BASE + '/index.html', { waitUntil: 'load' }); await settle(p);
    report.dom = await p.evaluate(() => ({
      mainSections: [...document.querySelectorAll('main > section')].map(s => ({ id: s.id || null, class: s.className, label: s.getAttribute('aria-label') || document.getElementById(s.getAttribute('aria-labelledby'))?.textContent.replace(/\s+/g, ' ').trim() })),
      bereiche: (() => { const b = document.getElementById('bereiche'); return { tag: b.tagName, label: b.getAttribute('aria-label'), cards: [...b.querySelectorAll('.area-card')].map(c => ({ h2: c.querySelector('h2').textContent, text: c.querySelector('p').textContent, link: c.querySelector('a').textContent, href: c.querySelector('a').getAttribute('href'), imgs: [...c.querySelectorAll('img')].map(i => ({ src: i.getAttribute('src'), alt: i.getAttribute('alt') })), linksInCard: c.querySelectorAll('a').length })) }; })(),
      products: [...document.querySelectorAll('.product-card')].map(c => ({ section: c.closest('section').id, productId: c.dataset.productId, label: c.querySelector('.product-id').textContent, title: c.querySelector('h3').textContent, status: c.querySelector('.product-status').textContent, src: c.querySelector('img').getAttribute('src'), alt: c.querySelector('img').getAttribute('alt'), linksInCard: c.querySelectorAll('a').length, cursor: getComputedStyle(c).cursor, natural: c.querySelector('img').naturalWidth + '×' + c.querySelector('img').naturalHeight })),
      alias: (() => { const a = document.getElementById('bewegungsstunden'); return { tag: a.tagName, parentId: a.parentElement.id, isFirstChild: a.parentElement.firstElementChild === a, tabIndex: a.tabIndex, text: a.textContent }; })(),
      oldFan: document.querySelectorAll('.fan-stage, .offer-grid, .pair-list, .age-layout, .future-section').length,
      downloadLinks: [...document.querySelectorAll('a[download], a[href$=".pdf"], a[href="#"], a[href=""]')].length,
    }));
    await ctx.close();
  }

  // 3) Sprungziele direkt öffnen (390 und 1440)
  for (const w of [390, 1440]) {
    for (const hash of ['bereiche', 'morgenkreis', 'bewegungseinheiten', 'bewegungsstunden', 'vorschule', 'themenwelten', 'arbeitsweise']) {
      const { ctx, p } = await newPage(browser, w, HEIGHT);
      await p.goto(BASE + '/index.html#' + hash, { waitUntil: 'load' }); await settle(p);
      await p.waitForTimeout(600); await waitStable(p);
      const r = await p.evaluate(h => { const t = document.getElementById(h); const sec = t.closest('section'); const b = sec.getBoundingClientRect(); const tb = t.getBoundingClientRect(); const hd = document.querySelector('.nav-shell'); const hb = hd.getBoundingClientRect(); const sticky = getComputedStyle(hd).position === 'sticky';
        const heading = sec.querySelector('h2'); const hh = heading.getBoundingClientRect();
        return { targetTop: Math.round(tb.top), sectionId: sec.id, headerBottom: sticky ? Math.round(hb.bottom) : 0, headingTop: Math.round(hh.top), heading: heading.textContent.replace(/\s+/g, ' ').trim(), headingVisible: hh.top >= (sticky ? hb.bottom : 0) && hh.bottom <= innerHeight, scrollY: Math.round(scrollY) }; }, hash);
      report.anchors.push({ width: w, hash, url: p.url().replace(BASE, ''), ...r, pass: r.headingVisible && r.targetTop >= r.headerBottom - 1 && r.targetTop < 140 });
      await ctx.close();
    }
  }

  // 4) Navigation von about/contact (Klick) und alte Direktadresse
  for (const w of [390, 1440]) {
    for (const pg of ['/about.html', '/contact.html']) {
      for (const text of ['Morgenkreis', 'Bewegungseinheiten', 'Vorschule', 'Themenwelten']) {
        const { ctx, p } = await newPage(browser, w, HEIGHT);
        await p.goto(BASE + pg, { waitUntil: 'load' }); await settle(p);
        await Promise.all([p.waitForURL(/index\.html|\/#|\/$/), p.click(`.nav-links a:text-is("${text}")`)]).catch(() => {});
        await p.waitForLoadState('load'); await settle(p); await p.waitForTimeout(900);
        const r = await p.evaluate(() => { const h = location.hash.slice(1); const t = document.getElementById(h); if (!t) return { ok: false }; const sec = t.closest('section'); const hh = sec.querySelector('h2').getBoundingClientRect(); const hd = document.querySelector('.nav-shell'); const sticky = getComputedStyle(hd).position === 'sticky'; const hb = sticky ? hd.getBoundingClientRect().bottom : 0; return { ok: true, section: sec.id, headingTop: Math.round(hh.top), headerBottom: Math.round(hb), visible: hh.top >= hb - 1 && hh.top < innerHeight }; });
        report.navFromSubpages.push({ width: w, from: pg, link: text, url: p.url().replace(BASE, ''), ...r });
        await ctx.close();
      }
    }
    const { ctx, p } = await newPage(browser, w, HEIGHT);
    await p.goto(BASE + '/#bewegungsstunden', { waitUntil: 'load' }); await settle(p); await p.waitForTimeout(900);
    const r = await p.evaluate(() => { const sec = document.getElementById('bewegungsstunden').closest('section'); const hh = sec.querySelector('h2').getBoundingClientRect(); const hd = document.querySelector('.nav-shell'); const hb = getComputedStyle(hd).position === 'sticky' ? hd.getBoundingClientRect().bottom : 0; return { section: sec.id, headingTop: Math.round(hh.top), headerBottom: Math.round(hb), visible: hh.top >= hb - 1 && hh.top < innerHeight }; });
    report.navFromSubpages.push({ width: w, from: 'Direktadresse', link: '/#bewegungsstunden', url: p.url().replace(BASE, ''), ...r });
    await ctx.close();
  }

  // 5) Linkziele (HTTP) und mailto
  {
    const { ctx, p } = await newPage(browser, 1440, HEIGHT);
    const all = new Map();
    for (const pg of PAGES) { await p.goto(BASE + pg); (await p.evaluate(() => [...document.querySelectorAll('a')].map(a => a.getAttribute('href')))).forEach(h => { if (!all.has(h)) all.set(h, new Set()); all.get(h).add(pg); }); }
    for (const [href, from] of all) {
      let status = null;
      if (href.startsWith('mailto:')) status = href === 'mailto:info@bewegtundbunt.de' ? 'mailto korrekt (nicht gesendet)' : 'FALSCH';
      else if (href.startsWith('#')) status = 'Anker auf index';
      else { const u = new URL(href.split('#')[0] || '/', BASE + '/'); const r = await ctx.request.get(u.href); status = r.status(); }
      report.links.push({ href, from: [...from], status });
    }
    await ctx.close();
  }

  // 6) Tastatur: Tab / Shift+Tab / Enter bei 390 und 1440
  for (const w of [390, 1440]) {
    for (const pg of PAGES) {
      const { ctx, p } = await newPage(browser, w, HEIGHT);
      await p.goto(BASE + pg, { waitUntil: 'load' }); await settle(p);
      const domOrder = await p.evaluate(() => [...document.querySelectorAll('a[href], button, input, [tabindex]')].filter(e => e.tabIndex >= 0).map(e => e.textContent.replace(/\s+/g, ' ').trim()));
      const seq = []; const problems = [];
      for (let i = 0; i < domOrder.length + 1; i++) {
        await p.keyboard.press('Tab'); await waitStable(p);
        const f = await p.evaluate(() => { const e = document.activeElement; if (!e || e === document.body) return null; const cs = getComputedStyle(e); const b = e.getBoundingClientRect(); const hd = document.querySelector('.nav-shell'); const sticky = getComputedStyle(hd).position === 'sticky'; const hb = hd.getBoundingClientRect();
          const inHeader = hd.contains(e);
          let clipped = false; for (let a = e.parentElement; a; a = a.parentElement) { const acs = getComputedStyle(a); if (acs.overflow !== 'visible' || acs.overflowX !== 'visible') { const ab = a.getBoundingClientRect(); const o = parseFloat(cs.outlineWidth) + parseFloat(cs.outlineOffset); if (b.left - o < ab.left - 0.5 || b.right + o > ab.right + 0.5 || b.top - o < ab.top - 0.5 || b.bottom + o > ab.bottom + 0.5) { if (a !== document.body && a !== document.documentElement) clipped = a.className; } } }
          return { text: e.textContent.replace(/\s+/g, ' ').trim(), outline: `${cs.outlineStyle} ${cs.outlineWidth} ${cs.outlineColor}`, visibleOutline: cs.outlineStyle !== 'none' && parseFloat(cs.outlineWidth) >= 2, inViewport: (() => { const o = parseFloat(cs.outlineWidth) + parseFloat(cs.outlineOffset); return b.top - o >= 0 && b.bottom + o <= innerHeight; })(), obscured: sticky && !inHeader && b.top < hb.bottom, clipped }; });
        if (!f) { seq.push('(Dokumentende)'); break; }
        seq.push(f.text);
        if (!f.visibleOutline || !f.inViewport || f.obscured || f.clipped) problems.push(f);
      }
      const orderOk = JSON.stringify(seq.filter(s => s !== '(Dokumentende)')) === JSON.stringify(domOrder);
      // Shift+Tab einmal komplett rückwärts
      const back = [];
      for (let i = 0; i < domOrder.length; i++) { await p.keyboard.press('Shift+Tab'); await waitStable(p); back.push(await p.evaluate(() => { const e = document.activeElement; const b = e.getBoundingClientRect(); const hd = document.querySelector('.nav-shell'); const obscured = getComputedStyle(hd).position === 'sticky' && !hd.contains(e) && b.top < hd.getBoundingClientRect().bottom; return (e.textContent || '').replace(/\s+/g, ' ').trim() + (obscured ? ' [VERDECKT]' : ''); })); }
      const backExpected = domOrder.slice().reverse();
      const backOk = JSON.stringify(back.map(s => s.replace(' [VERDECKT]', '')).slice(0, backExpected.length)) === JSON.stringify(backExpected);
      // Enter auf einem Navigationslink
      let enter = null;
      if (pg === '/index.html') {
        await p.focus('.nav-links a[href="#vorschule"]'); await p.keyboard.press('Enter'); await p.waitForTimeout(900);
        enter = await p.evaluate(() => ({ hash: location.hash, headingTop: Math.round(document.getElementById('vorschule-title').getBoundingClientRect().top) }));
      } else {
        await p.focus('.nav-links a[href="/#vorschule"]');
        await Promise.all([p.waitForURL(/#vorschule/), p.keyboard.press('Enter')]); await p.waitForLoadState('load'); await p.waitForTimeout(900);
        enter = await p.evaluate(() => ({ url: location.pathname + location.hash, headingTop: Math.round(document.getElementById('vorschule-title').getBoundingClientRect().top) }));
      }
      report.keyboard.push({ width: w, page: pg, focusableCount: domOrder.length, tabSequence: seq, orderMatchesDom: orderOk, shiftTabSequence: back, shiftTabOrderOk: backOk, shiftTabObscured: back.filter(b => b.includes('VERDECKT')).length, problems, enter });
      await ctx.close();
    }
  }

  // 7) Reduzierte Bewegung
  for (const pg of PAGES) {
    const { ctx, p } = await newPage(browser, 390, HEIGHT, { reducedMotion: 'reduce' });
    await p.goto(BASE + pg, { waitUntil: 'load' }); await settle(p);
    report.reducedMotion.push({ page: pg, ...(await p.evaluate(() => ({ matches: matchMedia('(prefers-reduced-motion: reduce)').matches, scrollBehavior: getComputedStyle(document.documentElement).scrollBehavior, animations: document.getAnimations().length, transitions: [...document.querySelectorAll('*')].filter(e => parseFloat(getComputedStyle(e).transitionDuration) > 0).length, hiddenHoverText: [...document.querySelectorAll('*')].filter(e => getComputedStyle(e).opacity === '0' && e.textContent.trim()).length }))) });
    await ctx.close();
  }

  // 8) 200 % Zoom bei 1440 px (entspricht 720 CSS-Pixel Layoutbreite bei Faktor 2)
  for (const pg of PAGES) {
    const { ctx, p } = await newPage(browser, 720, 450, { deviceScaleFactor: 2 });
    await p.goto(BASE + pg, { waitUntil: 'load' }); await settle(p);
    const lay = await p.evaluate(layoutProbe);
    report.zoom200.push({ page: pg, cssWidth: 720, dpr: 2, scrollWidth: lay.scrollWidth, clientWidth: lay.clientWidth, outside: lay.outside, textOverflow: lay.textOverflow, navVisible: lay.nav.every(n => n.visible), navOverlap: lay.navOverlap, header: lay.header, smallTargets: lay.smallTargets });
    if (pg === '/index.html') { await p.screenshot({ path: path.join(SHOTS, 'zoom200_index_1440-entspricht-720_einstieg.png') }); report.screenshots.push('zoom200_index_1440-entspricht-720_einstieg.png'); }
    await ctx.close();
  }

  // 9) Kontrast
  for (const pg of PAGES) {
    const { ctx, p } = await newPage(browser, 1440, HEIGHT);
    await p.goto(BASE + pg, { waitUntil: 'load' }); await settle(p);
    report.contrast[pg] = await p.evaluate(contrastProbe);
    await ctx.close();
  }

  // 10) Screenshots
  async function shot(pg, w, h, name, { full = false, clipSel = null, focusSel = null, tabs = 0 } = {}) {
    const { ctx, p } = await newPage(browser, w, h);
    await p.goto(BASE + pg, { waitUntil: 'load' }); await settle(p);
    const file = path.join(SHOTS, name);
    if (focusSel || tabs) {
      if (focusSel) { await p.focus(focusSel); await p.keyboard.press('Shift+Tab'); await p.keyboard.press('Tab'); }
      else for (let i = 0; i < tabs; i++) await p.keyboard.press('Tab');
      await p.waitForTimeout(300); await waitStable(p); await p.waitForTimeout(200);
      await p.screenshot({ path: file });
    } else if (clipSel) {
      const b = await p.evaluate(s => { const r = document.querySelector(s).getBoundingClientRect(); return { x: 0, y: Math.max(0, r.top + scrollY), width: document.documentElement.clientWidth, height: r.height }; }, clipSel);
      await p.screenshot({ path: file, fullPage: true, clip: b });
    } else await p.screenshot({ path: file, fullPage: full });
    report.screenshots.push(name);
    await ctx.close();
  }
  for (const w of WIDTHS) await shot('/index.html', w, HEIGHT, `index_${w}_einstieg-bereiche.png`, { clipSel: '.hero' });
  await shot('/index.html', 390, 844, 'index_390x844_erster-bildschirm.png');
  for (const w of WIDTHS) await shot('/index.html', w, HEIGHT, `index_${w}_viewport-oben.png`);
  for (const w of [390, 768]) await shot('/index.html', w, HEIGHT, `index_${w}_vorschule-abschnitt.png`, { clipSel: '#vorschule' });
  for (const w of [390, 1440]) {
    await shot('/index.html', w, HEIGHT, `index_${w}_morgenkreis-kartenreihe.png`, { clipSel: '#morgenkreis .product-row' });
    await shot('/index.html', w, HEIGHT, `index_${w}_bewegung-abschnitt.png`, { clipSel: '#bewegungseinheiten' });
    await shot('/index.html', w, HEIGHT, `index_${w}_gesamt.png`, { full: true });
  }
  for (const w of [320, 1440]) { await shot('/about.html', w, HEIGHT, `about_${w}_gesamt.png`, { full: true }); await shot('/contact.html', w, HEIGHT, `contact_${w}_gesamt.png`, { full: true }); }
  for (const w of [320, 360, 768]) { await shot('/about.html', w, HEIGHT, `about_${w}_gesamt.png`, { full: true }); await shot('/contact.html', w, HEIGHT, `contact_${w}_gesamt.png`, { full: true }); }
  for (const w of [390, 1440]) {
    await shot('/index.html', w, HEIGHT, `fokus_index_${w}_navigation-bewegungseinheiten.png`, { focusSel: '.nav-links a[href="#bewegungseinheiten"]' });
    await shot('/index.html', w, HEIGHT, `fokus_index_${w}_bereichslink-vorschule.png`, { focusSel: '#bereiche a[href="#vorschule"]' });
    await shot('/index.html', w, HEIGHT, `fokus_index_${w}_kontaktknopf.png`, { focusSel: '.cta-section .button' });
    await shot('/index.html', w, HEIGHT, `fokus_index_${w}_fusszeile-impressum.png`, { focusSel: '.legal a[href="/Impressum.html"]' });
    await shot('/about.html', w, HEIGHT, `fokus_about_${w}_navigation-vorschule.png`, { focusSel: '.nav-links a[href="/#vorschule"]' });
    await shot('/contact.html', w, HEIGHT, `fokus_contact_${w}_navigation-kontakt.png`, { focusSel: '.nav-links a[href="/contact.html"]' });
    await shot('/contact.html', w, HEIGHT, `fokus_contact_${w}_email.png`, { focusSel: '.contact .email' });
  }

  report.finishedAt = new Date().toISOString();
  fs.writeFileSync(path.join(DATA, 'browserpruefung.json'), JSON.stringify(report, null, 1));
  await browser.close();
  console.log('fertig', report.screenshots.length, 'Screenshots');
})();
