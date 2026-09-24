# Wortlaut-, Wort- und Bildabgleich A01 gegen gerenderten DOM-Text (aus browserpruefung.json) und Repo-Dateien
import json, re, hashlib, subprocess, unicodedata
from pathlib import Path
root = Path(__file__).resolve().parents[3]
out = root / '90_OUTPUT/WEBSITE_CLOUD_2026-09-24/messdaten'
br = json.loads((out / 'browserpruefung.json').read_text())
src = (root / 'docs/website-umbau-2026-09-24/TEXTQUELLE_A01.md').read_text()
norm = lambda t: re.sub(r'\s+', ' ', unicodedata.normalize('NFC', t).replace(' ', ' ')).strip()
blocks = dict(re.findall(r'<!-- PUBLIC (\S+) START -->\n(.*?)\n<!-- PUBLIC \1 END -->', src, re.S))
where = {'T01b': ['/about.html'], 'T92': ['/about.html'], 'T01c': ['/contact.html'], 'T93': ['/contact.html'], 'T03': ['/index.html', '/about.html', '/contact.html'], 'T04': ['/index.html', '/about.html', '/contact.html']}
res = {'blockCount': len(blocks), 'blocks': [], 'words': {}, 'images': [], 'titles': []}
for bid, text in blocks.items():
    for pg in where.get(bid, ['/index.html']):
        t = br['text'][pg]
        if bid.startswith('T01'): hay, kind = norm(t['title']), 'title'
        elif bid == 'T02': hay, kind = norm(t['description']), 'meta description'
        elif bid == 'T11label': hay, kind = ' '.join(norm(a['label']) for a in t['ariaLabels']), 'aria-label'
        else: hay, kind = norm(t['innerText']), 'gerenderter Text'
        lines = [norm(l) for l in text.split('\n') if l.strip()]
        missing = [l for l in lines if l not in hay]
        if bid.startswith('T01') or bid == 'T02': missing = [] if norm(text) == hay else [f'soll „{norm(text)}“ ist „{hay}“']
        res['blocks'].append({'id': bid, 'page': pg, 'vergleich': kind, 'zeilen': len(lines), 'fehlend': missing, 'pass': not missing})
# Navigation Reihenfolge
navsoll = [norm(l) for l in blocks['T03'].split('\n') if l.strip()]
for pg in br['text']:
    nav = [l['text'] for l in br['text'][pg]['links']][1:7]
    res.setdefault('nav', []).append({'page': pg, 'ist': nav, 'pass': nav == navsoll, 'current': [l['text'] for l in br['text'][pg]['links'] if l['current']]})
# Titelabgleich zwölf Karten
soll = {}
for bid, pref in (('T20', 'MORGENKREIS-WALD'), ('T21', 'SPORT-WALD'), ('T22', 'VORSCHULE-WALD')):
    ls = [l for l in blocks[bid].split('\n') if l.strip()]
    for i in range(4): soll[f'{pref}-{i+1:02d}'] = ls[i*3:i*3+3]
tab = {'MORGENKREIS-WALD-01': 'assets/handouts/morgenkreis-wald-1-wintervorrat-kiga.png', 'MORGENKREIS-WALD-02': 'assets/handouts/morgenkreis-wald-2-wind-kiga.png', 'MORGENKREIS-WALD-03': 'assets/handouts/morgenkreis-wald-3-laut-kiga.png', 'MORGENKREIS-WALD-04': 'assets/handouts/morgenkreis-wald-4-dach-kiga.png'}
for i in range(1, 5): tab[f'SPORT-WALD-0{i}'] = f'assets/handouts/sport-wald-0{i}-kiga.png'; tab[f'VORSCHULE-WALD-0{i}'] = f'assets/handouts/vorschule-wald-0{i}.png'
for c in br['dom']['products']:
    s = soll[c['productId']]
    res['titles'].append({**c, 'soll': s, 'bildSoll': tab[c['productId']], 'pass': [c['label'], c['title'], c['status']] == s and c['src'] == tab[c['productId']] and c['alt'] == '' and c['linksInCard'] == 0})
# Wortsuche in den drei HTML-Dateien (Quelltext inkl. Meta/Attribute) und gerendertem Text
html = {p: (root / p).read_text() for p in ('index.html', 'about.html', 'contact.html')}
def hits(pat):
    r = []
    for p, s in html.items():
        for i, l in enumerate(s.split('\n'), 1):
            for m in re.finditer(pat, l, re.I): r.append(f'{p}:{i}: …{l[max(0, m.start()-40):m.end()+40].strip()}…')
    return r
for name, pat in [('Bewegungsstunde*', r'bewegungsstunde'), ('Erzieher*', r'erzieher'), ('Krippe', r'krippe'), ('Vorschule · in Entwicklung', r'Vorschule · in Entwicklung'), ('Noch ohne Handouts', r'Noch ohne Handouts'), ('Handouts dafür gibt es noch nicht', r'Handouts dafür gibt es noch nicht'), ('Zwei Stapel', r'Zwei Stapel'), ('acht Blätter', r'acht Bl[äa]tter'), ('ca. 30/45 Min', r'ca\.\s*\d+\s*Min'), ('alte Sportpaare', r'Wald-Olympiade|Wald-Parcours|Wald-Spielzeit|Wald-Rhythmus|Wald-Entdecker|wald-olympiade|wald-parcours|wald-spielzeit|wald-rhythmus'), ('nur Stifte', r'nur (mit )?Stifte'), ('PDF/Download', r'\.pdf|download'), ('interne Begriffe', r'Hugo|Konrad|Greta|W1C|A01|Prüfstufe|staging|90_OUTPUT|claude'), ('Tracker/extern', r'https?://'), ('tabindex', r'tabindex')]:
    res['words'][name] = hits(pat)
# gerenderter Text: Erzieher-Familie unicode-/großkleinschreibungsunabhängig
res['renderedErzieher'] = {pg: len(re.findall('erzieh', unicodedata.normalize('NFKC', t['innerText']).casefold())) for pg, t in br['text'].items()}
# Bildhashes
man = json.loads((root / 'docs/website-umbau-2026-09-24/BILDER_A01.json').read_text())
for e in man['entries']:
    d = (root / e['path']).read_bytes()
    res['images'].append({'productId': e['productId'], 'path': e['path'], 'sha256': hashlib.sha256(d).hexdigest(), 'pass': hashlib.sha256(d).hexdigest() == e['sha256'] and len(d) == e['bytes']})
pk = json.loads((root / 'docs/website-umbau-2026-09-24/PAKET_MANIFEST_A01.json').read_text())
for b in pk['protectedGitBlobs']:
    s = subprocess.run(['git', 'hash-object', b['path']], capture_output=True, text=True, cwd=root).stdout.strip()
    res.setdefault('protected', []).append({'path': b['path'], 'pass': s == b['gitBlobSha']})
(out / 'text_wort_bild.json').write_text(json.dumps(res, ensure_ascii=False, indent=1))
print('Blöcke', len(blocks), 'PASS', sum(b['pass'] for b in res['blocks']), '/', len(res['blocks']))
for b in res['blocks']:
    if not b['pass']: print('  FEHLT', b)
print('Nav', [n['pass'] for n in res['nav']], [n['current'] for n in res['nav']])
print('Karten', sum(t['pass'] for t in res['titles']), '/', len(res['titles']))
for k, v in res['words'].items(): print(f'{k}: {len(v)}'); [print('   ', x[:170]) for x in v]
print('Erzieher gerendert', res['renderedErzieher'])
print('Bilder', sum(i['pass'] for i in res['images']), '/ 8; geschützt', sum(p['pass'] for p in res['protected']), '/', len(res['protected']))
