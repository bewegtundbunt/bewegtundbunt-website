# Streich-/Bleibe-/Neutext-Abgleich A02: index.html gegen Ausgangsstand 297c50d und gerenderten DOM-Text
import json, re, subprocess, hashlib, unicodedata
from pathlib import Path
root = Path(__file__).resolve().parents[3]
old = subprocess.run(['git', 'show', '297c50d:index.html'], capture_output=True, text=True, cwd=root).stdout
new = (root / 'index.html').read_text()
dom = json.loads((root / '90_OUTPUT/WEBSITE_SICHTRUNDE_A02/messdaten/browserpruefung_a02.json').read_text())['domText']
norm = lambda t: re.sub(r'\s+', ' ', unicodedata.normalize('NFC', t).replace(' ', ' ')).strip()
def block(src, start, end):
    a = src.index(start); return src[a:src.index(end, a) + len(end)]
bleibt = {
  'Hauptnavigation': block(old, '<div class="nav-links">', '</div>'),
  'Morgenkreis H2 + Einleitung': block(old, '<h2 id="morgenkreis-title">', '</p>'),
  'So läuft ein Morgenkreis + 4 Ablaufkarten': block(old, '<h2>So läuft ein Morgenkreis</h2>', '        </div>\n        <p class="ritual-note">').replace('        <p class="ritual-note">', ''),
  'Bewegen & Verwandeln / Hören & Klingen / Forschen & Staunen': block(old, '<h3>Bewegen &amp; Verwandeln</h3>', '        </div>\n        <p class="section-close">').rsplit('        </div>', 1)[0],
  'Arten-Überschrift + Einleitung': block(old, '<h2>Vier Morgenkreise', '</p>'),
  'Morgenkreis-Schlusszeile': block(old, '<p class="section-close">Den Morgenkreis', '</p>'),
  'Kicker Bewegung': '<p class="kicker">Bewegungseinheiten · Kindergarten</p>',
  'Alias #bewegungsstunden': '<span class="anchor-alias" id="bewegungsstunden"></span>',
  'Vier Bewegungs-Ablaufschritte': block(old, '<div class="ritual-grid">', '        </div>\n        <p class="row-status">').replace('\n        <p class="row-status">', ''),
  'Vorschule Kicker/H2/Einleitung': block(old, '<p class="kicker">Vorschule · für die Großen im Kindergarten</p>', '</p>\n        </div>'),
  'Säulenabschnitt': block(old, '<section class="section pale" aria-labelledby="verbindet-title">', '</section>'),
  'Themenwelten': block(old, '<section class="section pale" id="themenwelten"', '</section>'),
  'Praxis inkl. Biografie und Zitat': block(old, '<section class="section white" aria-labelledby="praxis-title">', '</section>'),
  'Kontaktüberschrift': block(old, '<h2 id="kontakt-title">', '</h2>'),
  'Kontakttext ab zweitem Satz + Knopf': 'Die Morgenkreis-Handouts werden im begleiteten Praxistest eingesetzt',
  'Kontaktknopf': '<a class="button button-primary" href="/contact.html">Kontakt aufnehmen</a>',
  'Fußzeile': block(old, '<footer class="footer">', '</footer>'),
  'Bereichstitel/-texte': '\n'.join(re.findall(r'<h2>[^<]*</h2>\n              <p>[^<]*</p>', block(old, '<section class="areas"', '</section>'))),
}
res = {'bleibt': {}, 'entfernt': {}, 'neu': {}, 'dom': {}}
for k, v in bleibt.items():
    parts = v.split('\n') if k == 'Bereichstitel/-texte' else [v]
    res['bleibt'][k] = all(p.strip() in new for p in parts if p.strip())
entfernt = ['Die vier Wald-Morgenkreise', 'Das Handout führt durch den Morgenkreis', 'Sie testen gerade ein Morgenkreis-Handout', 'In den Morgenkreisen zum Suchen und zum Verwandeln', 'suchen, tasten und behalten', 'Die Kinder kommen in Bewegung.', 'Aus Hütchen werden Fliegenpilze, aus Matten Waldteiche. Die Wald-Einheiten', 'Die vier Wald-Bewegungseinheiten', 'Das Handout zeigt Material, Aufbau und Ablauf', 'Die gezeigten Bewegungseinheiten sind Testfassungen', 'Die vier Wald-Vorschuleinheiten', 'Die gezeigten Vorschuleinheiten sind Testfassungen', 'Das Handout führt durch die Einheit, das Kinderblatt', 'So entsteht bewegt', 'id="arbeitsweise"', 'Die gezeigten Handouts sind Testfassungen', 'Zu den Morgenkreisen', 'Zu den Bewegungseinheiten', 'Zur Vorschule', 'Drei Bereiche, eine Themenwelt', 'Abbildungen: Testfassungen', 'Der Wald wird wach.', 'product-card', 'product-row', 'row-status', 'intro-panel', 'ritual-note', 'section-heading-follow', 'assets/handouts/']
for e in entfernt: res['entfernt'][e] = e not in new
neu = ['Mit Themenwelten durch den Kita-Alltag', 'Einblicke in Morgenkreis, Bewegungseinheiten und Vorschule. Bilder KI-generiert.', 'Etwas liegt versteckt – unter drei Bechern, unter einem Tuch, in einem Fühlbeutel. Die Kinder suchen, tasten und merken sich, was sie gefunden haben.', 'Der rote Faden einer Einheit', 'Aus Papier wird ein eigener Wald', 'Zum Handout gehört ein Kinderblatt, das die Idee aufgreift. Bei „Unser Wald aus Formen“ gestalten die Kinder ihren Wald mit Papierformen, fahren einfache Formen nach und erkennen Formen beim Zuhören in einer Geschichte.', 'Je nach Einheit wird gezählt, genau hingehört, zugeordnet, nachgezeichnet oder gestaltet. Auch Schere, Papier und Kleber können dazugehören. Welche Materialien benötigt werden, steht im jeweiligen Handout.', 'Einblick in ein Kinderblatt zur Themenwelt Wald.', 'Themenwelt Wald']
d = norm(dom)
for n in neu: res['neu'][n] = n in d
res['dom']['Testfassung'] = len(re.findall('testfassung', unicodedata.normalize('NFKC', dom).casefold()))
res['dom']['Erzieher'] = len(re.findall('erzieh', unicodedata.normalize('NFKC', dom).casefold()))
res['dom']['Testfassung_quelltext'] = len(re.findall('testfassung', new, re.I))
res['dom']['Erzieher_quelltext'] = len(re.findall('erzieh', new, re.I))
res['dom']['id bewegungseinheiten-title auf H2 „Der rote Faden einer Einheit“'] = '<h2 id="bewegungseinheiten-title">Der rote Faden einer Einheit</h2>' in new
res['dom']['PDF/Download/extern'] = len(re.findall(r'\.pdf|download|https?://', new, re.I))
m = json.loads((root / 'docs/website-umbau-2026-09-24/BILDER_A02.json').read_text())
res['bilder'] = {e['path'].split('/')[-1]: hashlib.sha256((root / e['path']).read_bytes()).hexdigest() == e['sha256'] for e in m['assets']}
used = sorted(set(re.findall(r'assets/previews/a02/[\w-]+\.png', new)))
res['bilder_verwendet'] = used
pk = json.loads((root / 'docs/website-umbau-2026-09-24/PAKET_MANIFEST_A02.json').read_text())
res['geschuetzt_ok'] = sum(subprocess.run(['git', 'hash-object', b['path']], capture_output=True, text=True, cwd=root).stdout.strip() == b['sha'] for b in pk['protectedGitBlobs'])
res['geschuetzt_gesamt'] = len(pk['protectedGitBlobs'])
res['paketdateien_ok'] = sum(hashlib.sha256((root / f['path']).read_bytes()).hexdigest() == f['sha256'] for f in pk['files'])
res['paketdateien_gesamt'] = len(pk['files'])
res['html_baseline'] = {b['path']: hashlib.sha256((root / b['path']).read_bytes()).hexdigest() == b['sha256'] for b in pk['baselineHtml']}
(root / '90_OUTPUT/WEBSITE_SICHTRUNDE_A02/messdaten/text_bild_a02.json').write_text(json.dumps(res, ensure_ascii=False, indent=1))
for k in ('bleibt', 'entfernt', 'neu'): print(k, sum(res[k].values()), '/', len(res[k]), [x for x, v in res[k].items() if not v])
print(res['dom']); print('Bilder', sum(res['bilder'].values()), '/14; verwendet', len(used)); print('geschützt', res['geschuetzt_ok'], '/', res['geschuetzt_gesamt'], 'Paket', res['paketdateien_ok'], '/', res['paketdateien_gesamt'], res['html_baseline'])
