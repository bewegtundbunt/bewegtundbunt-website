// Schnelle Layoutprobe: Überlauf und Worte, die ihre Box sprengen (nach document.fonts.ready)
const { chromium } = require('playwright');
const base = process.env.BASE || 'http://127.0.0.1:8765';
(async () => {
  const browser = await chromium.launch();
  for (const w of (process.env.WIDTHS || '320,360,390,768,1440').split(',').map(Number)) {
    for (const page of ['/index.html', '/about.html', '/contact.html']) {
      const ctx = await browser.newContext({ viewport: { width: w, height: 900 }, deviceScaleFactor: 1 });
      const p = await ctx.newPage();
      await p.goto(base + page, { waitUntil: 'load' });
      await p.evaluate(async () => { await document.fonts.ready; });
      const r = await p.evaluate(() => {
        const out = { sw: document.documentElement.scrollWidth, cw: document.documentElement.clientWidth, off: [], clip: [] };
        for (const el of document.querySelectorAll('body *')) {
          const b = el.getBoundingClientRect();
          if (b.width && (b.right > innerWidth + 0.5 || b.left < -0.5)) out.off.push(el.tagName + '.' + el.className + ' ' + Math.round(b.left) + '..' + Math.round(b.right));
          if (el.scrollWidth > el.clientWidth + 1 && getComputedStyle(el).overflowX !== 'visible' ) out.clip.push(el.tagName + '.' + el.className);
          if (el.children.length === 0 && el.textContent.trim() && el.scrollWidth > el.clientWidth + 1 && el.clientWidth > 0) out.clip.push('TEXT ' + el.tagName + '.' + el.className + ' ' + el.scrollWidth + '>' + el.clientWidth + ' ' + el.textContent.trim().slice(0, 40));
        }
        const hdr = document.querySelector('.nav-shell').getBoundingClientRect().height;
        const th = [...document.querySelectorAll('.area-thumbs')].map(t => { const bs=[...t.querySelectorAll('img')].map(i=>i.getBoundingClientRect()); return Math.round(t.getBoundingClientRect().height)+'/'+Math.round(Math.max(...bs.map(b=>b.bottom))-Math.min(...bs.map(b=>b.top))) });
        out.hdr = hdr; out.th = th.join(' ');
        return out;
      });
      console.log(w, page, 'sw', r.sw, 'cw', r.cw, 'hdr', r.hdr, 'thumbs', r.th, 'off', r.off.slice(0,5).join(' | '), 'clip', r.clip.slice(0,6).join(' | '));
      await ctx.close();
    }
  }
  await browser.close();
})();
