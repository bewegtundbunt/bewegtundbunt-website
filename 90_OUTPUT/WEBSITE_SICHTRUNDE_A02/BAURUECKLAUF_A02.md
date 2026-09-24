# Baurücklauf A02 · Website-Sichtrunde

**Datum:** 24.09.2026 · **Bau:** Hugo (W1C) · **Für:** René, Greta
**Zweig:** `hugo/website-drei-bereiche-2026-09-24`. Den Stand habe ich per Fast-forward von `297c50d` auf das Paket `299844c8362f04f2711dbcdc62f7faf403ad470c` übernommen; im Arbeitsbaum lagen keine eigenen Änderungen.
**Status:** Die Arbeitsfassung ist gebaut und in einem Durchlauf geprüft. Das ist keine Abnahme und keine Veröffentlichung, es gab keinen Merge. main, staging und der Vorbereitungszweig sind unverändert.

## 1 · Eingang geprüft

| Prüfung | Ergebnis |
|---|---|
| `BAUAUFTRAG_A02.md` SHA-256 | `ba5ec5d4…33f92db` – stimmt mit der Vorgabe überein |
| `PAKET_MANIFEST_A02.json` SHA-256 | `ab65e3a3…cddb3` – stimmt mit der Vorgabe überein |
| Manifest `files` (19 Dateien, darunter die 14 Ausschnitte) | 19/19 SHA-256 stimmen |
| Manifest `baselineHtml` (index/about/contact vor dem Bau) | 3/3 stimmen |
| Manifest `protectedGitBlobs` (93 Dateien) | 93/93 vor und nach dem Bau unverändert |

## 2 · Änderungen

Fachlich geändert ist nur `index.html`: 117 Zeilen neu, 285 entfernt; SHA-256 danach `949b1adb…22ee3`. Neu hinzugekommen ist `90_OUTPUT/WEBSITE_SICHTRUNDE_A02/**`. about.html, contact.html, Rechtsseiten, Schriften, alte Bilder, A01-Berichte und Paketdateien sind unverändert, gelöscht wurde nichts.

- **Einstieg:** Die neue H1 lautet „Mit Themenwelten durch den Kita-Alltag“. Links stehen H1, die kurze Einordnung und der bestehende zweite Einstiegssatz; rechts steht der Dreierfächer: Sport Wald 01 hinten und unten, Morgenkreis Zoo 01 in der Mitte, Vorschule Wald 04 vorn und oben (`z-index` 1/2/3). Der Zoo-Titel „Was steckt im Beutel?“ bleibt frei sichtbar. Unter 900 px steht der Fächer unter dem Text.
- **Bereichskarten:** Die Reihenfolge Morgenkreis, Bewegungseinheiten, Vorschule bleibt. Jede Karte hat einen Fächer aus vier verschiedenen Wald-Ausschnitten (01–04). Die Überdeckung ist gegenüber A01 umgekehrt: Bild 1 liegt vorn (`z-index` 4→1) und die Bilder liegen enger. Von den hinteren Bildern bleiben 22–24 % (Desktop) bzw. 38–41 % (Telefon) ihrer Breite sichtbar, in A01 waren es etwa 60–67 %. Nichts ist gespiegelt. Die drei Textlinks sind entfernt, Titel und Beschreibungen bleiben. Neu ist die optionale Kennzeichnung „Themenwelt Wald“. Der Hinweis unter den Karten lautet jetzt „Einblicke in Morgenkreis, Bewegungseinheiten und Vorschule. Bilder KI-generiert.“
- **Morgenkreis:** Entfernt sind die Reihe „Die vier Wald-Morgenkreise“ mit ihren 4 Karten, der Nutzenabsatz, der Kasten „Sie testen gerade …“ und `.ritual-note`. Der Text von „Suchen & Merken“ ist ersetzt. H2 und Einleitung, „So läuft ein Morgenkreis“ mit vier Karten, die drei übrigen Artenkarten und die Schlusszeile sind wortgleich erhalten.
- **Bewegungseinheiten:** Entfernt sind der obere Block (H2 „Die Kinder kommen in Bewegung.“, Einleitung, Kartenreihe, Nutzenabsatz) und `.row-status`. Die primäre H2 „Der rote Faden einer Einheit“ trägt jetzt `id="bewegungseinheiten-title"` und steht direkt unter dem Kicker; der zusätzliche Abstand darüber ist weg. Die vier Schritte, `#bewegungseinheiten`, der Alias `#bewegungsstunden` und die dunkelgrüne Gestaltung bleiben.
- **Vorschule:** Entfernt sind Reihe, Karten und `.row-status`. Neu ist ein Bild-/Textblock: Vorschule Wald 01 liegt hinten, Wald 04 in der Mitte und der Kinderblatt-Ausschnitt vorn als klarer Hauptblick. Dazu kommen H3, zwei Absätze und die Bildunterschrift wörtlich aus dem Brief.
- **Weitere Streichungen:** Der Abschnitt `#arbeitsweise` ist entfernt, ebenso der erste Satz des Kontaktabsatzes. Die Stile der entfernten Bausteine sind aus dem CSS gelöscht.

### Zwei Umsetzungsentscheidungen, bitte bestätigen

1. **Vorschul-Nutzenabsatz aus A01 entfernt** („Das Handout führt durch die Einheit, das Kinderblatt gehört als Kopiervorlage dazu. … geschnitten, gefaltet, geklebt und gestaltet.“). Er gehörte zur gestrichenen Kartenreihe, und seine Materialaussage würde neben dem neuen Absatz 2 doppelt stehen. Der Brief nennt ihn nicht ausdrücklich.
2. **Zweiter Einstiegssatz im Hero behalten** („bewegt & bunt entwickelt klar aufgebaute Handouts …“). Der Brief verlangt links „H1 und die bestehende kurze Einordnung“; die Streichung dieses Satzes ist dort nicht beauftragt. Wenn René nur die fett gesetzte Einordnung will, ist das eine Zeile.

Typografisch: „Kita-Alltag“ bricht in der H1 nicht mehr am Bindestrich um (`white-space: nowrap`); der Wortlaut ist gleich.

## 3 · Tatsächlich geprüft

Chromium 141 (Playwright, headless) mit lokalem Server, Fenster 900 px hoch, Faktor 1. Alle Messungen erfolgten nach `document.fonts.ready`, vollständig geladenen Bildern und Scroll-Stillstand. Belege: `messdaten/browserpruefung_a02.json`, `messdaten/text_bild_a02.json`.

| Prüfpunkt | Ergebnis |
|---|---|
| Waagerechter Überlauf bei 320/360/390/768/1440 | 0; `scrollWidth` = `clientWidth`; 0 Elemente außerhalb des Fensters, 0 abgeschnittene Texte |
| Hero-Fächer | Quellen und Schichtung wie beauftragt, auf allen fünf Breiten |
| Bereichsfächer | je 4 verschiedene Quellen, `z-index` 4/3/2/1, alle innerhalb der Karte; Bildfläche unter 620 px 108–125 px (Box 128), Desktop 188 px (Box 192, frei vom Text darunter) |
| Bilder | alle geladen, Seitenverhältnis erhalten (berechnete Maße), keines über die Originalgröße vergrößert, keine Spiegelung (Transformationsdeterminante > 0) |
| Vollseiten | 0 Verweise auf `assets/handouts/` im HTML, 0 solche Anfragen im Netzprotokoll, 0 CSS-Hintergrundbilder; keine `.product-*`, `.row-*`, `.intro-panel`, `.ritual-note`, `#arbeitsweise`, `.area-link` |
| Wortlaut | Bleibeblöcke 18/18 gegen den Quelltext von 297c50d; Streichungen 29/29; neue Texte 9/9 im gerenderten Text |
| Wortsuche | „Testfassung“ und Erzieher-Familie jeweils 0 in DOM und Quelltext; keine PDF-, Download- oder externen URLs |
| Ausschnitte | 14/14 bytegleich zu BILDER_A02, alle 14 eingebunden |
| Anker (390/1440) | `#bereiche`, `#morgenkreis`, `#bewegungseinheiten`, `#bewegungsstunden`, `#vorschule`, `#themenwelten`: Überschrift jeweils sichtbar unter der Kopfzeile |
| Navigation (390/1440) | Klicks von about/contact auf Bewegungseinheiten, Vorschule, Themenwelten, Morgenkreis sowie index → Über mich/Kontakt korrekt; Navigationslinks 44 px hoch |
| Tastatur (390/1440) | 12 fokussierbare Elemente, Tab-Folge = DOM-Folge, Fokus sichtbar, nicht verdeckt oder abgeschnitten; keine E-Mail gesendet |
| Netz | 0 Fehler, 0 externe Abrufe |

## 4 · Screenshots (19 eigenständige Dateien, keine doppelte Aufnahme)

Selbst gesichtet: `index_1440_erster-bildschirm` (Dreierfächer rechts, Karten beginnen im ersten Bildschirm), `index_1440_einstieg-bereiche`, `index_768_einstieg-bereiche` (Karten als Zeilen, Fächer links), `index_390_einstieg-bereiche` (vor der `nowrap`-Korrektur) und `index_320_einstieg-bereiche` (danach; „Kita-Alltag“ zusammen, alle Fächer vollständig), `index_390x844_erster-bildschirm`, `index_1440_morgenkreis` und `index_390_morgenkreis` (Streichungen ohne Lücken), `index_1440_bewegungseinheiten` und `index_390_bewegungseinheiten`, `index_1440_vorschule-kinderblatt` und `index_390_vorschule-kinderblatt` (Kinderblatt klar vorn, Texte lesbar), `fokus_1440_kontaktknopf`, `fokus_390_navigation-vorschule`.
Nur erzeugt, nicht einzeln gesichtet: `index_360_einstieg-bereiche`, `index_390_gesamt`, `index_1440_gesamt`, `fokus_1440_navigation-vorschule`, `fokus_390_kontaktknopf`; deren Messwerte sind in den Messdaten enthalten.

## 5 · Grenzen

- Nur Chromium headless unter Linux; kein Safari/Firefox, kein echtes Telefon, kein Screenreader-Test.
- Zoom und Kontrast habe ich in dieser Runde nicht neu gemessen. Die Farben sind gegenüber A01 unverändert; die neue Kennzeichnung nutzt die Kicker-Farbe auf weißer Karte.
- about.html und contact.html sind unverändert und wurden nur über die Navigationsklicks mitgeprüft.
- Die Bildtexte in den Ausschnitten (Zoo-Materialkasten, Kinderblatt-Aufgabe) habe ich nicht maschinell wortgeprüft.
- Die Bewertung „enger“ beruht auf den gemessenen sichtbaren Anteilen und der Sichtung; die endgültige Sichtentscheidung trifft René.

## 6 · Prüfmittel

`scripts/pruefung_a02.js` (Browser), `scripts/textpruefung_a02.py` (Streichen, Bleiben, Neutexte, Hashes). Aufruf im Repo-Root: `python3 -m http.server 8765 --bind 127.0.0.1 &`, danach `NODE_PATH=<node_modules mit playwright> node 90_OUTPUT/WEBSITE_SICHTRUNDE_A02/scripts/pruefung_a02.js` und `python3 90_OUTPUT/WEBSITE_SICHTRUNDE_A02/scripts/textpruefung_a02.py`.
