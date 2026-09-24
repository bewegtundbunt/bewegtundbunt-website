// Gezielte Browserprüfung Sichtrunde A02 (index.html) · nach document.fonts.ready, geladenen Bildern und Scroll-Stillstand
// Aufruf im Repo-Root: python3 -m http.server 8765 --bind 127.0.0.1 &  dann  NODE_PATH=<node_modules mit playwright> node 90_OUTPUT/WEBSITE_SICHTRUNDE_A02/scripts/pruefung_a02.js
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const BASE = process.env.BASE || 'http://127.0.0.1:8765';
const OUT = path.resolve(__dirname, '..');
const SHOTS = path.join(OUT, 'screenshots');
fs.mkdirSync(SHOTS, { recursive: true });
fs.mkdirSync(path.join(OUT, 'messdaten'), { recursive: true });

async function settle(p) {
  return p.evaluate(async () => {
    document.querySelectorAll('img[loading="lazy"]').forEach(i => { i.loading = 'eager'; });
    await Promise.all([...document.images].map(i => (i.complete ? 0 : new Promise(r => { i.addEventListener('load', r, { once: true }); i.addEventListener('error', r, { once: true }); }))));
    await document.fonts.ready;
    return { fonts: document.fonts.status, sora: document.fonts.check('600 16px Sora') };
  });
}
async function waitStable(p) {
  await p.waitForTimeout(150);
  await p.evaluate(() => new Promise(res => { let last = -1, same = 0; const t = () => { if (scrollY === last) { if (++same >= 5) return res(); } else { same = 0; last = scrollY; } requestAnimationFrame(t); }; t(); }));
}
async function page(browser, w, h = 900) {
  const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
  const p = await ctx.newPage();
  const net = { failed: [], bad: [], external: [], requested: [] };
  p.on('requestfailed', r => net.failed.push(r.url()));
  p.on('response', r => { if (r.status() >= 400) net.bad.push(r.status() + ' ' + r.url()); });
  p.on('request', r => { net.requested.push(r.url().replace(BASE, '')); if (!r.url().startsWith(BASE)) net.external.push(r.url()); });
  return { ctx, p, net };
}

function probe() {
  const vw = document.documentElement.clientWidth;
  const r = { scrollWidth: document.documentElement.scrollWidth, clientWidth: vw, outside: [], textOverflow: [], mirrored: [], images: [] };
  for (const el of document.querySelectorAll('body *')) {
    const b = el.getBoundingClientRect(); if (!b.width) continue;
    if (b.right > vw + 0.5 || b.left < -0.5) r.outside.push(el.tagName + '.' + el.className);
    if (el.childElementCount === 0 && el.textContent.trim() && el.scrollWidth > el.clientWidth + 1 && el.clientWidth > 0 && getComputedStyle(el).display !== 'inline') r.textOverflow.push(el.textContent.trim().slice(0, 40));
  }
  for (const img of document.images) {
    const t = getComputedStyle(img).transform; let det = 1;
    if (t && t !== 'none') { const m = t.match(/matrix\(([^)]+)\)/); if (m) { const [a, b, c, d] = m[1].split(',').map(Number); det = a * d - b * c; } }
    if (det < 0 || /scale\(-|scaleX\(-/.test(img.style.transform)) r.mirrored.push(img.getAttribute('src'));
    const b = img.getBoundingClientRect();
    r.images.push({ src: img.getAttribute('src'), complete: img.complete, natural: img.naturalWidth + '×' + img.naturalHeight, ratioOk: (() => { const cs = getComputedStyle(img); const w = parseFloat(cs.width) - parseFloat(cs.borderLeftWidth) - parseFloat(cs.borderRightWidth) - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight); const h = parseFloat(cs.height) - parseFloat(cs.borderTopWidth) - parseFloat(cs.borderBottomWidth) - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom); return Math.abs(w / h - img.naturalWidth / img.naturalHeight) < 0.01; })(), renderedW: Math.round(b.width), upscaled: img.clientWidth > img.naturalWidth + 1 });
  }
  // Fächer: Bildvereinigung innerhalb der Karte, Höhe, Reihenfolge, verschiedene Motive
  r.areaFans = [...document.querySelectorAll('.area-card')].map(c => {
    const imgs = [...c.querySelectorAll('.area-thumbs img')]; const bs = imgs.map(i => i.getBoundingClientRect()); const cb = c.getBoundingClientRect();
    return { card: c.querySelector('h2').textContent, srcs: imgs.map(i => i.getAttribute('src').split('/').pop()), distinct: new Set(imgs.map(i => i.getAttribute('src'))).size, z: imgs.map(i => +getComputedStyle(i).zIndex),
      unionH: +(Math.max(...bs.map(b => b.bottom)) - Math.min(...bs.map(b => b.top))).toFixed(1), boxH: +c.querySelector('.area-thumbs').getBoundingClientRect().height.toFixed(1), clearOfText: Math.max(...bs.map(b => b.bottom)) <= c.querySelector('.area-world').getBoundingClientRect().top + 0.5, insideCard: bs.every(b => b.left >= cb.left - 0.5 && b.right <= cb.right + 0.5),
      visibleShare: imgs.map((im, i) => { const b = bs[i]; const next = bs[i - 1]; if (!next) return 1; return +((b.right - next.right) / b.width).toFixed(2); }), links: c.querySelectorAll('a').length };
  });
  const hf = [...document.querySelectorAll('.hero-fan img')];
  r.heroFan = hf.map(i => ({ src: i.getAttribute('src').split('/').pop(), z: +getComputedStyle(i).zIndex, top: Math.round(i.getBoundingClientRect().top) }));
  const kb = [...document.querySelectorAll('.kinderblatt-fan img')];
  r.kinderFan = kb.map(i => ({ src: i.getAttribute('src').split('/').pop(), z: +getComputedStyle(i).zIndex, w: Math.round(i.getBoundingClientRect().width) }));
  r.headings = [...document.querySelectorAll('h1,h2,h3')].map(h => h.tagName + ' ' + h.textContent.replace(/\s+/g, ' ').trim());
  r.sections = [...document.querySelectorAll('main > section')].map(s => s.id || s.className);
  r.domText = document.body.innerText;
  r.handoutRefs = [...document.querySelectorAll('[src],[href],[srcset]')].map(e => e.getAttribute('src') || e.getAttribute('href') || '').filter(u => u.includes('assets/handouts/'));
  r.productClasses = document.querySelectorAll('.product-row,.product-card,.row-status,.row-title,.intro-panel,.ritual-note,#arbeitsweise,.area-link').length;
  r.cssBackgroundImages = [...document.querySelectorAll('*')].map(e => getComputedStyle(e).backgroundImage).filter(b => b.includes('url('));
  r.navHeights = [...document.querySelectorAll('.nav-links a')].map(a => Math.round(a.getBoundingClientRect().height));
  r.ids = [...document.querySelectorAll('[id]')].map(e => e.id);
  return r;
}

(async () => {
  const browser = await chromium.launch();
  const rep = { at: new Date().toISOString(), browser: browser.version(), layout: [], anchors: [], nav: [], keyboard: [], screenshots: [] };
  for (const w of [320, 360, 390, 768, 1440]) {
    const { ctx, p, net } = await page(browser, w);
    await p.goto(BASE + '/index.html', { waitUntil: 'load' });
    const f = await settle(p);
    const r = await p.evaluate(probe);
    rep.layout.push({ width: w, fonts: f, ...r, domText: undefined, net });
    if (w === 1440) rep.domText = r.domText;
    await ctx.close();
  }
  for (const w of [390, 1440]) {
    for (const hash of ['bereiche', 'morgenkreis', 'bewegungseinheiten', 'bewegungsstunden', 'vorschule', 'themenwelten']) {
      const { ctx, p } = await page(browser, w);
      await p.goto(BASE + '/index.html#' + hash, { waitUntil: 'load' }); await settle(p); await waitStable(p); await p.waitForTimeout(400); await waitStable(p);
      rep.anchors.push({ width: w, hash, ...(await p.evaluate(h => { const t = document.getElementById(h); const sec = t.closest('section'); const hh = (sec.querySelector('h2') || sec.querySelector('h1')).getBoundingClientRect(); const hd = document.querySelector('.nav-shell'); const hb = getComputedStyle(hd).position === 'sticky' ? hd.getBoundingClientRect().bottom : 0; return { section: sec.id, heading: (sec.querySelector('h2') || {}).textContent, headingTop: Math.round(hh.top), headerBottom: Math.round(hb), visible: hh.top >= hb - 1 && hh.bottom <= innerHeight }; }, hash)) });
      await ctx.close();
    }
    for (const [from, text] of [['/about.html', 'Bewegungseinheiten'], ['/about.html', 'Vorschule'], ['/contact.html', 'Themenwelten'], ['/contact.html', 'Morgenkreis'], ['/index.html', 'Über mich'], ['/index.html', 'Kontakt']]) {
      const { ctx, p } = await page(browser, w);
      await p.goto(BASE + from, { waitUntil: 'load' }); await settle(p);
      await Promise.all([p.waitForNavigation({ waitUntil: 'load' }), p.click(`.nav-links a:text-is("${text}")`)]);
      await settle(p); await waitStable(p); await p.waitForTimeout(400); await waitStable(p);
      rep.nav.push({ width: w, from, link: text, url: p.url().replace(BASE, ''), ...(await p.evaluate(() => { const h = location.hash.slice(1); if (!h) return { title: document.title }; const sec = document.getElementById(h).closest('section'); const hh = sec.querySelector('h2').getBoundingClientRect(); const hd = document.querySelector('.nav-shell'); const hb = getComputedStyle(hd).position === 'sticky' ? hd.getBoundingClientRect().bottom : 0; return { section: sec.id, visible: hh.top >= hb - 1 && hh.top < innerHeight }; })) });
      await ctx.close();
    }
    // Tastatur
    const { ctx, p } = await page(browser, w);
    await p.goto(BASE + '/index.html', { waitUntil: 'load' }); await settle(p);
    const dom = await p.evaluate(() => [...document.querySelectorAll('a[href],button,[tabindex]')].filter(e => e.tabIndex >= 0).map(e => e.textContent.replace(/\s+/g, ' ').trim()));
    const seq = [], problems = [];
    for (let i = 0; i < dom.length; i++) {
      await p.keyboard.press('Tab'); await waitStable(p);
      const f = await p.evaluate(() => { const e = document.activeElement; const cs = getComputedStyle(e); const b = e.getBoundingClientRect(); const o = parseFloat(cs.outlineWidth) + parseFloat(cs.outlineOffset); const hd = document.querySelector('.nav-shell'); const obsc = getComputedStyle(hd).position === 'sticky' && !hd.contains(e) && b.top < hd.getBoundingClientRect().bottom; return { t: e.textContent.replace(/\s+/g, ' ').trim(), outline: cs.outlineStyle + ' ' + cs.outlineWidth, ok: cs.outlineStyle !== 'none' && b.top - o >= 0 && b.bottom + o <= innerHeight && !obsc }; });
      seq.push(f.t); if (!f.ok) problems.push(f);
    }
    rep.keyboard.push({ width: w, count: dom.length, order: JSON.stringify(seq) === JSON.stringify(dom), seq, problems });
    await ctx.close();
  }
  // Screenshots (je Datei genau einmal)
  async function shot(w, name, { sel = null, full = false, focus = null, h = 900 } = {}) {
    const { ctx, p } = await page(browser, w, h);
    await p.goto(BASE + '/index.html', { waitUntil: 'load' }); await settle(p);
    const file = path.join(SHOTS, name);
    if (fs.existsSync(file)) throw new Error('doppelte Aufnahme ' + name);
    if (focus) { await p.focus(focus); await p.keyboard.press('Shift+Tab'); await p.keyboard.press('Tab'); await waitStable(p); await p.waitForTimeout(200); await p.screenshot({ path: file }); }
    else if (sel) { const b = await p.evaluate(s => { const r = document.querySelector(s).getBoundingClientRect(); return { x: 0, y: r.top + scrollY, width: document.documentElement.clientWidth, height: r.height }; }, sel); await p.screenshot({ path: file, fullPage: true, clip: b }); }
    else await p.screenshot({ path: file, fullPage: full });
    rep.screenshots.push(name); await ctx.close();
  }
  for (const w of [320, 360, 390, 768, 1440]) await shot(w, `index_${w}_einstieg-bereiche.png`, { sel: '.hero' });
  await shot(390, 'index_390x844_erster-bildschirm.png', { h: 844 });
  await shot(1440, 'index_1440_erster-bildschirm.png');
  for (const w of [390, 1440]) {
    await shot(w, `index_${w}_morgenkreis.png`, { sel: '#morgenkreis' });
    await shot(w, `index_${w}_bewegungseinheiten.png`, { sel: '#bewegungseinheiten' });
    await shot(w, `index_${w}_vorschule-kinderblatt.png`, { sel: '#vorschule' });
    await shot(w, `index_${w}_gesamt.png`, { full: true });
    await shot(w, `fokus_${w}_navigation-vorschule.png`, { focus: '.nav-links a[href="#vorschule"]' });
    await shot(w, `fokus_${w}_kontaktknopf.png`, { focus: '.cta-section .button' });
  }
  fs.writeFileSync(path.join(OUT, 'messdaten', 'browserpruefung_a02.json'), JSON.stringify(rep, null, 1));
  await browser.close();
  console.log('fertig', rep.screenshots.length, 'Screenshotdateien');
})();
