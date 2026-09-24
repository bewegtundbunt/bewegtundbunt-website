# Baurücklauf A01 · Website · drei gleichwertige Bereiche

**Datum:** 24.09.2026 · **Bau:** Hugo (Cloud-Sitzung, Autonomie W1C) · **Empfänger:** Greta, René; unabhängige Gegenprüfung: Konrad
**Arbeitszweig:** `hugo/website-drei-bereiche-2026-09-24` · **Ausgangscommit:** `47729c47e12eac3d0860a9dd8b3b7cd9eecf6883` (= `vorbereitung/website-drei-bereiche-2026-09-24`, abgeleitet von `staging@49fb5f3454f67289edc7718d62488d567b426176`)
**Status:** Arbeitsfassung gebaut und selbst geprüft. **Keine** Abnahme, **keine** Veröffentlichung, kein Merge. main, staging und der Vorbereitungszweig sind unverändert.

> Ergebnisse: **PASS** = an der gebauten Fassung tatsächlich geprüft und belegt · **WARN** = Reichweite begrenzt / Entscheidung offen · **STOPP** = keine.
> Ein Layout-PASS ist keine pädagogische Freigabe und kein Veröffentlichungsauftrag.

---

## 1 · Stand vor dem Bau (Q01/Q02)

Gemessen am 24.09.2026 um 16:13 UTC, Arbeitsbaum sauber, HEAD = `47729c4`, Tree `96561b3f…`. `origin/staging` = `49fb5f3…`, `origin/vorbereitung/…` = `47729c4…`.

| Prüfung | Ergebnis |
|---|---|
| SHA-256 `BAUAUFTRAG_A01.md` | `d3ac357172d28f0deaaa76d3d3c0014f44a20a7c862a25723814b58d49eba070` = Vorgabe |
| SHA-256 `PAKET_MANIFEST_A01.json` | `0dd4a8efd285a4ccf0bf821b4e64d71c4442625f62123e2d113d641e2730da86` = Vorgabe |
| `PRUEFE_PAKET.py` vor dem Bau | `PASS: 23 Ausgangsdateien/Paketbindungen stimmen.` (u. a. Textquelle, Matrix, Bildmanifest, 3 HTML-Ausgangsdateien, 8 neue PNGs, 4 Morgenkreis-PNGs) |
| `protectedGitBlobs` (25 Dateien: Impressum, Datenschutz, Schriften, fonts.css, Logo, alte Bilder, .bak, README) | 25/25 Git-Blob identisch |
| Drei HTML-Dateien vor Bau = staging | `index.html` 84cc6979… identisch zu `git show 49fb5f3:index.html` |

`PRUEFE_PAKET.py` **nach** dem Bau meldet erwartungsgemäß nur die drei beauftragten HTML-Dateien als geändert (Manifestrolle „nach Bau erwartungsgemäß geändert“); alle 20 übrigen Bindungen stimmen weiterhin (`messdaten/pruefe_paket_nach_bau.txt`).

Kleine Beobachtung ohne Folgen: Die Zeilenangaben der Textquelle weichen an einzelnen Stellen um ± 3 Zeilen vom Ausgangsbestand ab (z. B. Morgenkreis-Kicker steht auf Zeile 647, nicht 650). Die Inhalte waren eindeutig zuzuordnen.

## 2 · Geänderte Dateien (Q03/Q04/Q05)

| Datei | Änderung |
|---|---|
| `index.html` | neu gegliedert gemäß Textquelle §2: Einstieg + `#bereiche`, Morgenkreis, Bewegungseinheiten, Vorschule, Säulen, `#arbeitsweise`, Themenwelten, Praxis, Kontakt; CSS entsprechend ersetzt (alte Fächer-, Angebots-, Alters-, Paar- und Zukunftsstile entfernt) |
| `about.html` | Titel T01b, Navigation T03, erster Satz des zweiten Absatzes T92, Fußzeile T04, Bedien-CSS (44-px-Ziele, Fokus in dunkler Fußzeile, Kopfzeile auf Telefon nicht klebend) |
| `contact.html` | Titel T01c, Navigation T03, Absatz T93, Fußzeile T04, dasselbe Bedien-CSS |
| `90_OUTPUT/WEBSITE_CLOUD_2026-09-24/**` | neu: dieser Bericht, Messdaten, 42 Screenshotdateien, Prüfscripte |

Diff: `messdaten/diff_html_gegen_47729c4.patch`, Statistik `messdaten/diff_stat.txt` (3 Dateien, +479/−373 Zeilen).
Endhashes: `index.html` 417f4e82…c3c4 · `about.html` 017ca65f…40a0 · `contact.html` 091e97a9…363 (vollständig in `messdaten/text_wort_bild.json` bzw. per `sha256sum` nachmessbar).

**Unverändert (belegt):** Impressum.html, datenschutz.html, fonts.css, assets/fonts/**, Logo, alle alten Bilder, `index-2026-03.html.bak`, README, AGENTS.md/CLAUDE.md, alle Paketdateien in `docs/…` (25/25 Blobs + 20/20 Paketbindungen). Keine Datei gelöscht; die alten Sport-Bilder `wald-*.png/jpg` liegen weiter im Repository, werden aber nicht mehr eingebunden. Keine PDFs, keine Download-Links (`a[download]`, `.pdf`, `href="#"`: 0), kein Shop/Login/Tracker, kein externer Abruf (Netzprotokoll aller Läufe: 0 externe Anfragen).

## 3 · Wortlaut und Zuordnung (T01–T13)

Maschineller Abgleich `scripts/textpruefung.py` gegen den **gerenderten** Text (innerText nach Schriftladen), Seitentitel, Meta-Beschreibung und `aria-label` → `messdaten/text_wort_bild.json`.

- **37 PUBLIC-Blöcke der Textquelle, 41 Seitenzuordnungen (T03/T04 je dreifach): 41/41 zeichengleich vorhanden** (Vergleich nach Leerraum-Normalisierung; `&amp;`, `&nbsp;` als normale Zeichen).
- Einzige typografische Anpassung: In den drei Bereichslinks steht vor „→“ ein geschütztes Leerzeichen (`&nbsp;`), damit der Pfeil bei 320 px nicht allein umbricht. Sichtbarer Wortlaut unverändert.
- Unverändert übernommen (Byte-Kopie aus dem Ausgangsstand): Morgenkreis-Praxistest-Kasten, „So läuft ein Morgenkreis“ mit vier Schritten, Klangschalen-Hinweis, „Vier Morgenkreise – vier Arten…“ mit vier Artenkarten, T33-Schlusszeile, Säule „Ruhe für Sie“, Praxis-Überschrift, Zitat, „Mehr über René →“, Kontaktknopf, Fußzeile (E-Mail, ©, Leipzig, Impressum, Datenschutz), about-Absatz 1 und about-Absatz 2 ab „Wiederkehrende Rituale …“.

### Zwölf Produktkarten (T03/T04/B02/B03)

| Produkt-ID | Bezeichner | Titel (H3) | Status | Bild | Sichtung Bildinhalt |
|---|---|---|---|---|---|
| MORGENKREIS-WALD-01 | Morgenkreis 01 · Wald | Wo ist der Wintervorrat? | Testfassung | morgenkreis-wald-1-wintervorrat-kiga.png | Titel im Bild identisch |
| MORGENKREIS-WALD-02 | Morgenkreis 02 · Wald | Wer wiegt sich im Wind? | Testfassung | morgenkreis-wald-2-wind-kiga.png | identisch |
| MORGENKREIS-WALD-03 | Morgenkreis 03 · Wald | Wer macht den Wald so laut? | Testfassung | morgenkreis-wald-3-laut-kiga.png | identisch |
| MORGENKREIS-WALD-04 | Morgenkreis 04 · Wald | Welches Dach hält dicht? | Testfassung | morgenkreis-wald-4-dach-kiga.png | identisch |
| SPORT-WALD-01 | Bewegungseinheit 01 · Wald | Frösche und Eichhörnchen | Testfassung | sport-wald-01-kiga.png | identisch |
| SPORT-WALD-02 | Bewegungseinheit 02 · Wald | Wildkatzen und Adler | Testfassung | sport-wald-02-kiga.png | identisch |
| SPORT-WALD-03 | Bewegungseinheit 03 · Wald | Wildschweine und Eichhörnchen | Testfassung | sport-wald-03-kiga.png | identisch |
| SPORT-WALD-04 | Bewegungseinheit 04 · Wald | Igel, Frösche und Adler | Testfassung | sport-wald-04-kiga.png | identisch; Abschluss „Zurück aus dem Wald“ statt „Der Wald schläft ein“ → **W02** (nicht W01) |
| VORSCHULE-WALD-01 | Vorschule 01 · Wald | Wir zählen im Herbstwald | Testfassung | vorschule-wald-01.png | identisch („Zahlen & Mengen“) |
| VORSCHULE-WALD-02 | Vorschule 02 · Wald | Ein Rascheln im Blätterwald | Testfassung | vorschule-wald-02.png | identisch („Sprache, Buchstaben & Zuhören“) |
| VORSCHULE-WALD-03 | Vorschule 03 · Wald | Was gehört zusammen? | Testfassung | vorschule-wald-03.png | identisch („Untersuchen, Ordnen & Entdecken“) |
| VORSCHULE-WALD-04 | Vorschule 04 · Wald | Unser Wald aus Formen | Testfassung | vorschule-wald-04.png | identisch („Formen, Gestalten & Zuhören“) |

Automatisch: 12/12 Karten mit richtigem Bezeichner, Titel, Status, Bildpfad, `alt=""`, 0 Links je Karte, Mauszeiger `auto`. Alle 12 Bilder habe ich zusätzlich selbst angesehen. Bildtexte sind **nicht** automatisch geprüft; auffällig, aber nicht änderbar: Die Sport-Vorschauen tragen im Bildkopf „BEWEGUNGSSTUNDE“, Sport 01–03 die bisherigen Abschlussüberschriften (so im Bildmanifest vermerkt).

### Wortsuche in den drei HTML-Dateien (Quelltext inkl. Meta/Attribute)

| Suche | Treffer | Bewertung |
|---|---|---|
| „Bewegungsstunde*“ | 2 | nur technischer Alias `id="bewegungsstunden"` und die erlaubte historische Aussage about.html „Angefangen hat bewegt &amp; bunt mit Bewegungsstunden …“ → PASS |
| Erzieher-Familie (Quelltext + gerenderter Text, casefold/NFKC) | 0 | PASS |
| „Krippe“ | 2 | Berufsbiografie about.html und T90 (Renés Tätigkeit) – erlaubt → PASS |
| „Vorschule · in Entwicklung“, „Noch ohne Handouts“, „Handouts dafür gibt es noch nicht“, „Zwei Stapel“ | 0 | PASS |
| acht Blätter, „ca. … Min“, alte Sportpaare/Bildnamen im HTML | 0 | PASS |
| „nur Stifte“, PDF/Download, externe URLs, tabindex | 0 | PASS |
| interne Namen/Stufen/Pfade (Hugo, Konrad, Greta, W1C, A01, staging, 90_OUTPUT …) | 0 | PASS |

## 4 · Abnahmematrix

| ID | Urteil | Prüfung und Befund | Beleg |
|---|---|---|---|
| Q01 | PASS | Zweig/Commit/Arbeitszustand wie gebunden; Hashes nachgemessen (§1) | §1, `messdaten/pruefe_paket_nach_bau.txt` |
| Q02 | PASS | Textquelle, Matrix, Bildmanifest vorhanden, Hashes = Manifest | PRUEFE_PAKET.py vor Bau |
| Q03 | PASS | Fachänderung nur index/about/contact; 8 PNGs bytegleich (8/8 SHA-256) | §2, `text_wort_bild.json` → images |
| Q04 | PASS | 25/25 geschützte Blobs identisch; App-Repo nicht berührt | `text_wort_bild.json` → protected |
| Q05 | PASS | keine PDF, kein Download-/Shop-/Login-Ziel, keine neuen Bilder; alle Links gesichtet (§6) | `browserpruefung.json` → links, dom.downloadLinks = 0 |
| T01 | PASS | 41/41 Blockzuordnungen im gerenderten Text/Titel/Meta/aria-label | `text_wort_bild.json` → blocks |
| T02 | PASS | Überblick, Navigation (3 Seiten), Abschnittsfolge: Morgenkreis → Bewegungseinheiten → Vorschule; Vorschule mit gleicher Kartenreihe, Nutzen- und Standsatz, eigenem Farbgrund | DOM `mainSections`, Screenshots `index_*_vorschule-abschnitt.png` |
| T03 | PASS | genau 4 Karten je Bereich, 12 gesamt; Überblicksbilder nicht als Karten gezählt | Tabelle §3 |
| T04 | PASS | 12 Titel zeichengleich; Sichtstichprobe aller drei Reihen | §3, Screenshots Kartenreihen |
| T05 | PASS | alte Vorschulaussagen 0 Treffer (HTML, DOM, Meta) | §3 Wortsuche |
| T06 | PASS | kein 8-Blätter-/Krippen-/Minutenblock, keine alten Sportpaare; Kicker „Bewegungseinheiten · Kindergarten“ | §3, `index_*_bewegung-abschnitt.png` |
| T07 | PASS | nur Alias + erlaubte historische Aussage | §3 |
| T08 | PASS | Sport/Vorschule nur „Testfassung“ (T44/T53); Praxistest-Aussagen nur für Morgenkreis (Kasten, T33, T80, T91); keine Termine | redaktionell gesichtet |
| T09 | PASS | T50–T53 wörtlich; Materialien „im jeweiligen Handout“; kein „nur Stifte“ | §3 |
| T10 | PASS | Bauernhof „Vier Morgenkreise im Praxistest. Dazu liegt eine Vorschuleinheit bereits als Entwurf vor.“; Zoo nur erster Morgenkreis | T80 |
| T11 | PASS | Biografie/Beruf/Kontakt bewahrt; nur T92-Satz ersetzt | Diff about.html |
| T12 | PASS | keine internen Rollen/Pfade/Fassungsnummern im Besuchertext | §3 |
| T13 | PASS (mechanisch) | Erzieher-Familie 0 Treffer im gebauten HTML und gerenderten Text; mitgelieferte WORTPRUEFUNG_A01.md für die PUBLIC-Texte | §3; Bildtext **nicht** automatisch geprüft |
| B01 | PASS | 8/8 Bildhashes = BILDER_A01.json | `text_wort_bild.json` |
| B02 | PASS | Sport 04 = W02 (gesichtet), übrige 7 wie Manifest | Tabelle §3 |
| B03 | PASS | 4 Morgenkreis-PNGs Blob-identisch, Inhalt gesichtet und richtig zugeordnet | §3 |
| B04 | PASS | Produktbilder vollständig, proportional (Seitenverhältnis gerendert = natürlich, Abweichung < 0,01), kein `object-fit`, kein aufgesetzter Text; max. 380 px | `browserpruefung.json` → layout.images; `index_1440/390_*kartenreihe.png` |
| B05 | PASS | alle Bilder `complete`, `naturalWidth > 0`; Netzfehler 0; echte Maße 380×544 / 380×538 im HTML | layout.images, layout.net |
| B06 | PASS | 12 Überblicksbilder `alt=""`, Bereich sichtbar daneben; Produktbilder `alt=""` mit sichtbarem Titel/Nummer | `dom.bereiche`, `dom.products` |
| B07 | PASS | „Abbildungen: Testfassungen · Bilder KI-generiert.“ unter dem Überblick sichtbar | `index_*_einstieg-bereiche.png` |
| S01 | PASS | ein Überblick `#bereiche` (`section`, aria-label „Drei Bereiche entdecken“) mit drei kleinen Bildgruppen; alte Fächer/Angebotsreihe entfernt (DOM: 0) | `dom.oldFan = 0`, Einstiegsscreenshots 5 Breiten |
| S02 | PASS | Bildfläche unter 620 px: Box 128 px, tatsächliche Bildvereinigung 119,7–119,8 px (320/360/390); Karten wachsen mit Text; alle Links erreichbar | Tabelle §5 |
| S03 | PASS | nach Einstieg: Morgenkreis, Bewegungseinheiten, Vorschule; danach Säulen, Arbeitsweise, Themenwelten | `dom.mainSections` |
| S04 | PASS | je Seite genau eine H1; index H1 → H2 → H3 ohne ausgelassene Ebene; Kartentitel H3 unter der Bereichs-H2 | `layout.headings` |
| L01 | PASS | 15/15 Kombinationen + 390×844: `scrollWidth = clientWidth`; 0 Elemente außerhalb des Ansichtsfensters (trotz `overflow-x:hidden` elementweise gemessen); keine dekorativen Ausnahmen mehr nötig | Tabelle §5 |
| L02 | PASS | 0 abgeschnittene Wörter (Textknoten-Rechtecke gegen Container), 0 überlappende Karten, keine unsichtbaren Knöpfe; Sprungziele unter der Kopfzeile sichtbar (§6); kein `word-break:break-all` | layout.textOverflow/overlapCards, Screenshots |
| L03 | PASS | 6 Navigationslinks bei 320/360/390 sichtbar, je 44 px hoch, keine Überlagerung; manuell per Klick getestet (§6) | Tabelle §5, `index_320/360/390_viewport-oben.png` |
| L04 | PASS | Tab-Folge = DOM-Folge auf 3 Seiten × 390/1440; Shift+Tab vollständig rückwärts; Enter auf „Vorschule“ springt zum Ziel; Fokus sichtbar (3 px), nicht abgeschnitten, nicht unter der Kopfzeile; kein positiver tabindex, keine Fokusfalle | `browserpruefung.json` → keyboard; `fokus_*.png` (14 Bilder) |
| L05 | PASS | `prefers-reduced-motion: reduce`: scroll-behavior `auto`, 0 Animationen, 0 Übergänge, kein versteckter Hover-Text | reducedMotion |
| L06 | PASS | 71 Textfarbpaare, Minimum 5,63:1; Fokus 8,5–15,1:1 (Tabelle §7) | contrast |
| L07 | WARN | **Nur Zoom-Nachbildung**, kein tatsächlich bedienter Browser-Zoom auf 200 %: Layout mit 720 CSS-px Breite und Gerätepixelfaktor 2 (entspricht rechnerisch 1440 px bei 200 %). In dieser Nachbildung: kein Überlauf, Navigation vollständig, keine abgeschnittenen Texte, alle Ziele ≥ 44 px. Ein echter 200-%-Zoom im bedienten Browser steht aus. | zoom200, `zoom200_index_1440-entspricht-720_einstieg.png` |
| L08 | PASS | jede Messung nach `document.fonts.ready` (Status `loaded`, 5–90 ms), Sora und Dancing Script geladen; Source Serif 4 auf index geladen, auf about/contact planmäßig ungenutzt („unloaded“); Nachmessung nach 300 ms identisch; keine Schriftladefehler, kein externer Abruf | layout.fonts, layout.remeasure |
| N01 | PASS | 19 IDs auf index, alle eindeutig; 7 Anker bei 390/1440 geöffnet, Überschrift jeweils sichtbar unter der Kopfzeile | Tabelle §6 |
| N02 | PASS | 4 Navigationsziele von about und contact bei 390/1440 per Klick; URL und sichtbares Ziel korrekt; `/#bewegungsstunden` landet auf Bewegungseinheiten | navFromSubpages |
| N03 | PASS | `/`, `/about.html`, `/contact.html` HTTP 200; Rücklink vorhanden; `mailto:info@bewegtundbunt.de` korrekt – **keine Nachricht gesendet** | links |
| N04 | PASS | `/Impressum.html` und `/datenschutz.html` auf allen drei Seiten, HTTP 200 (case-sensitiver Server) | links |
| N05 | PASS | Produktkarten ohne Link, Rolle Listeneintrag, Mauszeiger normal; keine leeren oder `#`-Links | dom.products |

**Gesamt: 42 Kriterien – 41 PASS, 1 WARN (L07), 0 STOPP.** Weitere WARN-Punkte zur Einordnung siehe §8.

## 5 · Messwerte aller Seite/Breite-Kombinationen (nach Schriftladen)

Chromium 141.0.7390.37 (Playwright, headless), Höhe 900, Gerätepixelfaktor 1; zusätzlich 390 × 844. Server: `python3 -m http.server` im Repo-Root (case-sensitiv).
Spalten: scrollWidth / clientWidth · Elemente außerhalb · abgeschnittene Texte · Kopfzeilenhöhe (Position) · kleinste Navigationshöhe · Bildflächenhöhe der drei Bereichskarten · Anordnung der Bereichskarten · Schriften.

| Seite | Breite×Höhe | sW / cW | außerhalb | Text | Kopfzeile px | Nav min px | Bildfläche px | Bereichskarten | Schriften |
|---|---|---|---|---|---|---|---|---|---|
| index.html | 320×900 | 320 / 320 | 0 | 0 | 197.9 (static) | 44 | 119.7 / 119.8 / 119.8 | untereinander | loaded, 15 ms |
| about.html | 320×900 | 320 / 320 | 0 | 0 | 198 (static) | 44 | – | – | loaded, 37 ms |
| contact.html | 320×900 | 320 / 320 | 0 | 0 | 197.2 (static) | 44 | – | – | loaded, 5 ms |
| index.html | 360×900 | 360 / 360 | 0 | 0 | 153.9 (static) | 44 | 119.7 / 119.8 / 119.8 | untereinander | loaded, 28 ms |
| about.html | 360×900 | 360 / 360 | 0 | 0 | 154 (static) | 44 | – | – | loaded, 27 ms |
| contact.html | 360×900 | 360 / 360 | 0 | 0 | 153.2 (static) | 44 | – | – | loaded, 22 ms |
| index.html | 390×900 | 390 / 390 | 0 | 0 | 153.9 (static) | 44 | 119.7 / 119.8 / 119.8 | untereinander | loaded, 22 ms |
| about.html | 390×900 | 390 / 390 | 0 | 0 | 154 (static) | 44 | – | – | loaded, 29 ms |
| contact.html | 390×900 | 390 / 390 | 0 | 0 | 153.2 (static) | 44 | – | – | loaded, 34 ms |
| index.html | 768×900 | 768 / 768 | 0 | 0 | 109 (sticky) | 44 | 132.3 / 132.4 / 132.4 | untereinander (Bild links, Text rechts) | loaded, 29 ms |
| about.html | 768×900 | 768 / 768 | 0 | 0 | 109 (sticky) | 44 | – | – | loaded, 21 ms |
| contact.html | 768×900 | 768 / 768 | 0 | 0 | 109 (sticky) | 44 | – | – | loaded, 19 ms |
| index.html | 1440×900 | 1440 / 1440 | 0 | 0 | 77 (sticky) | 44 | 142.8 / 142.9 / 142.9 | nebeneinander | loaded, 90 ms |
| about.html | 1440×900 | 1440 / 1440 | 0 | 0 | 77 (sticky) | 44 | – | – | loaded, 26 ms |
| contact.html | 1440×900 | 1440 / 1440 | 0 | 0 | 77 (sticky) | 44 | – | – | loaded, 12 ms |
| index.html | 390×844 | 390 / 390 | 0 | 0 | 153.9 (static) | 44 | 119.7 / 119.8 / 119.8 | untereinander | loaded, 30 ms |

Produktreihen: 4 Spalten ab 761 px, 2 Spalten darunter (einspaltiger Fluss der Seite, kein Karussell). Bei 1440 × 900 liegen alle drei Bereichskarten samt Bildhinweis im ersten Bildschirm: Kartenunterkante laut Messdaten `areaCardsBottom` = 839 px vom Seitenanfang bzw. Browserfensteroberkante (bei Scrollposition 0, Fensterhöhe 900). Der früher genannte Wert von etwa 760 px galt relativ zum Einstiegsbereich (Hero-Ausschnitt), nicht zum Browserfenster.

## 6 · Sprungziele und Navigation

| Anker (direkt geöffnet) | 390 px: Zielkante / Überschrift | 1440 px: Zielkante / Kopfzeile / Überschrift |
|---|---|---|
| `#bereiche` | 12 / 169 | 104 / 77 / 295 |
| `#morgenkreis` | 12 / 119 | 104 / 77 / 235 |
| `#bewegungseinheiten` | 12 / 120 | 104 / 77 / 236 |
| `#bewegungsstunden` (Alias, `span`, nicht fokussierbar, erstes Kind des Abschnitts) | 12 / 50 | 104 / 77 / 142 |
| `#vorschule` | 12 / 120 | 104 / 77 / 235 |
| `#themenwelten` | 12 / 82 | 104 / 77 / 198 |
| `#arbeitsweise` | 12 / 82 | 104 / 77 / 198 |

Klicktests von about.html und contact.html (je Morgenkreis, Bewegungseinheiten, Vorschule, Themenwelten) bei 390 und 1440: 16/16 korrekte URL (`/#…`) und sichtbare Abschnittsüberschrift. Direktadresse `/#bewegungsstunden`: 2/2 auf Bewegungseinheiten. Umsetzung über `scroll-padding-top` (104/128/12 px je nach Kopfzeile) und `scroll-padding-bottom: 16px`, damit Fokusring und Überschriften nicht unter der Kopfzeile bzw. an der Unterkante verschwinden.

## 7 · Kontraste (Auszug < 7,5:1 und alle Fokuspaare; vollständig in `browserpruefung.json` → contrast)

Methode: berechnete Farben nach WCAG 2.x, halbtransparente Hintergründe aufgeblendet; beim Verlaufsgrund des Einstiegs wurde der dunklere Verlaufsendpunkt #edf3e6 angesetzt (ungünstigster Fall).

| Seite | Element | Farbpaar | Verhältnis | Urteil |
|---|---|---|---|---|
| index.html | `h1 .hero-line` (hero) | rgb(53, 98, 67) auf rgb(237, 243, 230) | 6.23:1 | PASS |
| index.html | `h1 .hero-line-accent` (hero) | rgb(53, 98, 67) auf rgb(237, 243, 230) | 6.23:1 | PASS |
| index.html | `.area-card p` (areas) | rgb(83, 96, 87) auf rgb(252, 253, 252) | 6.5:1 | PASS |
| index.html | `.area-caption span` (areas) | rgb(83, 96, 87) auf rgb(237, 243, 230) | 5.84:1 | PASS |
| index.html | `.kicker` (section white) | rgb(53, 98, 67) auf rgb(255, 255, 255) | 7.05:1 | PASS |
| index.html | `.kicker` (section soft) | rgb(53, 98, 67) auf rgb(231, 241, 207) | 6:1 | PASS |
| index.html | `.section-intro` (section white) | rgb(83, 96, 87) auf rgb(255, 255, 255) | 6.61:1 | PASS |
| index.html | `.section-intro` (section soft) | rgb(83, 96, 87) auf rgb(231, 241, 207) | 5.63:1 | PASS |
| index.html | `.section-intro` (section pale) | rgb(83, 96, 87) auf rgb(232, 240, 228) | 5.67:1 | PASS |
| index.html | `.section-intro` (section cta-section) | rgb(83, 96, 87) auf rgb(231, 241, 207) | 5.63:1 | PASS |
| index.html | `.product-id` (section white) | rgb(53, 98, 67) auf rgb(251, 250, 244) | 6.74:1 | PASS |
| index.html | `.product-id` (section dark) | rgb(53, 98, 67) auf rgb(251, 250, 244) | 6.74:1 | PASS |
| index.html | `.product-id` (section soft) | rgb(53, 98, 67) auf rgb(251, 250, 244) | 6.74:1 | PASS |
| index.html | `.intro-panel p` (section white) | rgb(83, 96, 87) auf rgb(232, 240, 228) | 5.67:1 | PASS |
| index.html | `.step-card p` (section white) | rgb(83, 96, 87) auf rgb(255, 255, 255) | 6.61:1 | PASS |
| index.html | `.type-card p` (section white) | rgb(83, 96, 87) auf rgb(255, 255, 255) | 6.61:1 | PASS |
| index.html | `.section-close` (section white) | rgb(83, 96, 87) auf rgb(255, 255, 255) | 6.61:1 | PASS |
| index.html | `.section-close` (section pale) | rgb(83, 96, 87) auf rgb(232, 240, 228) | 5.67:1 | PASS |
| index.html | `.feature-card p` (section pale) | rgb(83, 96, 87) auf rgb(250, 252, 249) | 6.39:1 | PASS |
| index.html | `.world-card p` (section pale) | rgb(83, 96, 87) auf rgb(255, 255, 255) | 6.61:1 | PASS |
| index.html | `.practice-copy p` (section white) | rgb(83, 96, 87) auf rgb(255, 255, 255) | 6.61:1 | PASS |
| index.html | `.footer-claim` (footer) | rgba(255, 255, 255, 0.64) auf rgb(16, 43, 32) | 7:1 | PASS |
| index.html | `.footer-bottom span` (footer) | rgba(255, 255, 255, 0.62) auf rgb(16, 43, 32) | 6.66:1 | PASS |
| index.html | Fokus „bewegt & bunt“ | 3px solid rgb(16, 43, 32) auf rgb(251, 250, 244) | 14.46:1 | PASS |
| index.html | Fokus „Zu den Morgenkreisen →“ | 3px solid rgb(16, 43, 32) auf rgb(252, 253, 252) | 14.87:1 | PASS |
| index.html | Fokus „Mehr über René →“ | 3px solid rgb(16, 43, 32) auf rgb(255, 255, 255) | 15.12:1 | PASS |
| index.html | Fokus „Kontakt aufnehmen“ | 3px solid rgb(16, 43, 32) auf rgb(231, 241, 207) | 12.88:1 | PASS |
| index.html | Fokus „info@bewegtundbunt.de“ | 3px solid rgb(168, 209, 59) auf rgb(16, 43, 32) | 8.53:1 | PASS |
| about.html | `.footer-claim` (footer) | rgba(255, 255, 255, 0.64) auf rgb(16, 43, 32) | 7:1 | PASS |
| about.html | `.footer-bottom span` (footer) | rgba(255, 255, 255, 0.62) auf rgb(16, 43, 32) | 6.66:1 | PASS |
| about.html | `.eyebrow` (about) | rgb(53, 98, 67) auf rgb(237, 243, 230) | 6.23:1 | PASS |
| about.html | `.copy p` (about) | rgb(83, 96, 87) auf rgb(252, 253, 252) | 6.5:1 | PASS |
| about.html | Fokus „bewegt & bunt“ | 3px solid rgb(16, 43, 32) auf rgb(251, 250, 244) | 14.46:1 | PASS |
| about.html | Fokus „info@bewegtundbunt.de“ | 3px solid rgb(168, 209, 59) auf rgb(16, 43, 32) | 8.53:1 | PASS |
| contact.html | `.footer-claim` (footer) | rgba(255, 255, 255, 0.64) auf rgb(16, 43, 32) | 7:1 | PASS |
| contact.html | `.footer-bottom span` (footer) | rgba(255, 255, 255, 0.62) auf rgb(16, 43, 32) | 6.66:1 | PASS |
| contact.html | `.contact p` (contact) | rgb(83, 96, 87) auf rgb(251, 250, 244) | 6.32:1 | PASS |
| contact.html | Fokus „bewegt & bunt“ | 3px solid rgb(16, 43, 32) auf rgb(251, 250, 244) | 14.46:1 | PASS |
| contact.html | Fokus „info@bewegtundbunt.de“ | 3px solid rgb(168, 209, 59) auf rgb(16, 43, 32) | 8.53:1 | PASS |

## 8 · Offene Punkte, WARN und Grenzen

1. **WARN – Telefon-Einstieg (Sichtentscheidung René):** Bei 390 × 844 zeigt der erste Bildschirm Navigation (alle drei Bereiche direkt erreichbar), H1 und Einstieg; die erste Bereichskarte beginnt bei ≈ 625 px, die zweite und dritte folgen beim Scrollen. Alternative wäre ein kürzerer Einstieg auf Telefonen – das wäre eine Textentscheidung, nicht Teil dieser Textquelle.
2. **WARN – Bedienänderung außerhalb der Textquelle:** Unter 620 px ist die Kopfzeile nicht mehr klebend (statt ~154–198 px dauerhaft verdeckter Fläche), weil sechs Links mit 44-px-Zielen zwei bis drei Zeilen brauchen. Zudem alle Navigations-, Bereichs-, Fußzeilen- und E-Mail-Links auf 44 px Mindesthöhe und ein gut sichtbarer hellgrüner Fokusring in der dunklen Fußzeile (bisher dunkel auf dunkel). Bitte in Konrads Gegenprüfung mit ansehen.
3. **WARN – Bildtexte:** Die Sport-Vorschauen tragen im Bild „BEWEGUNGSSTUNDE“ bzw. bei 01–03 die bisherigen Abschlussüberschriften. Das ist der gelieferte Bildstand und nicht Teil der HTML-Wortprüfung.
4. **WARN – Prüfgrenzen:** Geprüft in einem Chromium (headless, Linux). Kein Safari/Firefox, kein echtes Mobilgerät, kein Screenreader-Durchgang; 200-%-Zoom nur als 720-CSS-px-Layout mit Faktor 2 nachgebildet, kein bedienter Browser-Zoom (daher L07 = WARN). Tastaturtests über Playwright-Tastaturereignisse.
5. **Vorschau:** Die bestehende Vercel-Integration hat nach dem Push automatisch eine Zweigvorschau erzeugt (Status „Ready“, 24.09.2026 16:35 UTC): https://bewegtundbunt-website-git-hugo-w-b411c9-bewegtundbunts-projects.vercel.app – technische Plattform-Vorschau, keine Abnahme der Live-Seite; die Messungen dieses Berichts stammen aus dem lokalen Lauf, nicht aus dieser Vorschau. Von mir wurde nichts an Vercel/IONOS konfiguriert. Prüfbar ist der Zweig `hugo/website-drei-bereiche-2026-09-24` bzw. der Entwurfs-PR; falls die bestehende Hosting-Integration automatisch eine Zweigvorschau erzeugt, ist diese keine Abnahme der Live-Seite. Lokal: Repo-Root mit `python3 -m http.server 8765` starten und `http://127.0.0.1:8765/` öffnen (absolute Links `/about.html` setzen den Root voraus).
6. **Nächster Schritt:** unabhängige technische Gegenprüfung (Konrad) an genau dieser Fassung; Greta bündelt Inhalt/Tragfähigkeit; René entscheidet über Sichtfreigabe und Veröffentlichung. Die 12 Titel sind laut Auftrag für diesen Entwurf gebunden; ihre endgültige Veröffentlichung ist ausdrücklich noch offen.

## 9 · Screenshots (alle nach Schriftladen und vollständigem Bildladen aufgenommen und von mir gesichtet)

Im Ordner liegen **42 eigenständige Screenshotdateien**. Die Liste `screenshots` in `browserpruefung.json` hat 44 Einträge, weil `about_320_gesamt.png` und `contact_320_gesamt.png` im selben Lauf zweimal aufgenommen und dabei überschrieben wurden (zweite Aufnahme gleicher Seite/Breite); es sind keine zusätzlichen Belege.

| Datei (`screenshots/`) | Gesichteter Befund |
|---|---|
| `index_320_einstieg-bereiche.png` | H1 4 Zeilen, drei Karten untereinander, Bildgruppen zentriert, Links vollständig (Pfeil bleibt am Wort), Bildhinweis sichtbar |
| `index_360_einstieg-bereiche.png`, `index_390_einstieg-bereiche.png` | wie 320, luftiger; keine Abschnitte |
| `index_768_einstieg-bereiche.png` | Karten als Zeilen: Bildgruppe links, Text rechts; alle drei + Hinweis vollständig |
| `index_1440_einstieg-bereiche.png` | H1 links, Einstiegstext rechts, drei gleichrangige Karten nebeneinander, Hinweis darunter |
| `index_390x844_erster-bildschirm.png` | reale Telefonhöhe: Navigation, H1, Einstieg, Beginn Karte 1 (siehe WARN 1) |
| `index_{320,360,390,768,1440}_viewport-oben.png` | erster Bildschirm je Breite, Navigation vollständig und lesbar |
| `index_390_vorschule-abschnitt.png`, `index_768_vorschule-abschnitt.png` | Vorschule vollständig: Kicker, H2, Einstieg, Reihentitel, 4 Karten, Nutzen, Stand |
| `index_390_morgenkreis-kartenreihe.png`, `index_1440_morgenkreis-kartenreihe.png` | 4 Morgenkreis-Karten, Bilder vollständig, Titel richtig |
| `index_390_bewegung-abschnitt.png`, `index_1440_bewegung-abschnitt.png` | dunkler Abschnitt, 4 helle Karten, roter Faden, Standsatz; gut lesbar |
| `index_390_gesamt.png`, `index_1440_gesamt.png` | Gesamtfolge wie §2 der Textquelle, keine Reste alter Sportpaare/Vorschul-Platzhalter |
| `about_{320,360,768,1440}_gesamt.png`, `contact_{320,360,768,1440}_gesamt.png` | Unterseiten vollständig; „Über mich“/„Kontakt“ als aktuelle Seite unterstrichen; neue Fußzeile |
| `fokus_index_{390,1440}_navigation-bewegungseinheiten.png` | Fokusrahmen um Navigationslink klar sichtbar |
| `fokus_index_{390,1440}_bereichslink-vorschule.png` | Fokusrahmen um „Zur Vorschule →“ |
| `fokus_index_{390,1440}_kontaktknopf.png` | doppelter Ring um „Kontakt aufnehmen“ |
| `fokus_index_{390,1440}_fusszeile-impressum.png` | hellgrüner Ring in dunkler Fußzeile |
| `fokus_about_{390,1440}_navigation-vorschule.png`, `fokus_contact_{390,1440}_navigation-kontakt.png`, `fokus_contact_{390,1440}_email.png` | Navigations- und E-Mail-Fokus auf Unterseiten sichtbar |
| `zoom200_index_1440-entspricht-720_einstieg.png` | 200 %: Navigation zweizeilig vollständig, Text ohne Abschneiden |

Während der Arbeit korrigierte Befunde aus der Sichtung: (a) Karten bei 1440 unten angeschnitten → Einstieg zweispaltig gestrafft; (b) Bildgruppen auf Telefon linksbündig → zentriert; (c) H1 auf Telefon fünfzeilig → kleinere Stufe; (d) Pfeil allein in Zeile bei 320 → geschütztes Leerzeichen; (e) E-Mail-Links 21 px hoch → 44 px; (f) Fokusring an der Unterkante/ unter Kopfzeile → Scroll-Abstände; (g) Messartefakt durch noch laufendes sanftes Scrollen in Fokusaufnahmen → Aufnahme erst nach Scroll-Stillstand.

## 10 · Prüfmittel (wiederholbar)

- `scripts/pruefung.js` – Browserprüfung (Layout, Schriften, Bilder, DOM, Anker, Navigation, Links, Tastatur, reduzierte Bewegung, Zoom, Kontrast, Screenshots) → `messdaten/browserpruefung.json`
- `scripts/textpruefung.py` – Wortlaut-, Wort-, Titel- und Hashabgleich → `messdaten/text_wort_bild.json`
- `scripts/probe.js` – schnelle Überlaufprobe während des Baus
- Aufruf: im Repo-Root `python3 -m http.server 8765 --bind 127.0.0.1 &`, dann `NODE_PATH=<globales node_modules mit playwright> node 90_OUTPUT/WEBSITE_CLOUD_2026-09-24/scripts/pruefung.js` und `python3 90_OUTPUT/WEBSITE_CLOUD_2026-09-24/scripts/textpruefung.py`.

Prüfbelege enthalten keine personenbezogenen oder geheimen Daten über die ohnehin öffentliche Website hinaus.
