# Website · Abnahmematrix A01 für die erste Cloud-Baufassung

Datum: 24.09.2026. Grundlage: `TEXTQUELLE_A01.md`, Bildmanifest und Hauptbrief desselben Baupakets. **Dies ist der Prüfauftrag, kein bereits ausgeführtes Prüfergebnis.** Hugo liefert seine Eigenprüfung. Technische Gegenprüfung und Renés Sichtentscheidung folgen auf die tatsächlich gebaute Fassung; sie werden durch diesen Plan nicht vorweggenommen.

## 1 · Ergebnisregeln

- **PASS:** Kriterium an der benannten Fassung tatsächlich geprüft und mit Ergebnis belegt.
- **WARN:** Prüfung fehlt oder ihre Reichweite ist begrenzt. Eine fehlende Browser-/Screenshotmöglichkeit wird so ausgewiesen, nicht mit Quelltextprüfung gleichgesetzt.
- **STOPP:** Falsche Ausgangsbindung, falscher Produkt-/Bildstand, nicht auflösbarer Widerspruch oder nicht erlaubte Änderung.

Für jeden Eintrag im Rücklauf: ID, Urteil, untersuchte Fassung, Prüfung und Befund, Belegpfad. „Sieht gut aus“ oder „keine Fehler“ ohne Prüfgegenstand genügt nicht. Datierte Hashes gelten für die tatsächlich geprüften Dateien. Layout-PASS ist keine pädagogische Freigabe und kein Auftrag zur Veröffentlichung.

## 2 · Ausgangspunkt und Änderungsumfang

| ID | Soll | Erforderlicher Beleg |
|---|---|---|
| Q01 | Tatsächlicher Startzweig/-commit und Arbeitszustand entsprechen der Bindung des Hauptbriefs. Die drei HTML-Ausgangshashes und alle aktuellen Paketbindungen selbst gemäß Paketmanifest nachgemessen. | Datum/Uhrzeit, Zweig, Commit, Hashliste und Arbeitszustand vor Bau. Abweichungen vor Bearbeitung klären, keine alte Fassung zurücksetzen. |
| Q02 | Textquelle, Matrix und Bildmanifest sind vorhanden; ihre Hashes stimmen mit dem Paketmanifest. | Nachgemessene Hashes der drei Lieferquellen. Kein Vertrauen allein auf Dateinamen. |
| Q03 | Änderungen nur im Umfang des Hauptbriefs; Website-Fachänderung nur index.html, about.html und contact.html; die acht bereitgestellten PNGs bleiben bytegleich. | Dateiliste und Diff. Gesonderte Transport-/Regeldateien nur soweit im Hauptbrief ausdrücklich aufgeführt. |
| Q04 | Impressum.html, datenschutz.html, assets/fonts, fonts.css, Logo und historische .bak-Dateien bleiben unverändert; alte Bilder bleiben vorhanden. App-Repo bleibt außerhalb. | Vorher-/Nachhervergleich der berührbaren Website-Dateien, Prüfung der Diff-Dateiliste und Erklärung des Umfangs. |
| Q05 | Keine öffentliche PDF-Datei, kein Download-Link, kein Shop/Account/Bezahlvorgang, keine neue Bildproduktion. | Dateiliste und Suche nach PDF-/Download-Zielen; manuelle Sichtung aller neuen Links. |

## 3 · Wortlaut und fachliche Richtigkeit

| ID | Soll | Erforderlicher Beleg |
|---|---|---|
| T01 | Alle in der Textquelle genannten Ersetzungen sind enthalten; HTML-Entities werden als normale Zeichen verglichen. | Vollständige Zuordnung Text-ID → Datei/Element; Textvergleich des gerenderten Inhalts, einschließlich Metadaten und barrierefreier Bezeichnungen. |
| T02 | Übersicht und Navigation nennen Morgenkreis, Bewegungseinheiten, Vorschule in dieser Reihenfolge. Vorschule erhält gleiche gestalterische und inhaltliche Wertigkeit. | DOM-Reihenfolge und Bildschirmansichten. |
| T03 | Genau vier Produktkarten pro Bereich, insgesamt zwölf; Nummer, Bereich, Titel und „Testfassung“ sind als Text sichtbar. | Liste der zwölf DOM-Karten mit Produkt-ID, Titel und Bildquelle; Vergleich mit §5 der Textquelle. Überblick-Bildgruppen nicht als weitere Produktkarten zählen. |
| T04 | Alle zwölf Titel sind zeichengleich zur Textquelle, mit Satzzeichen; kein erfundener Untertitel. | Automatischer Titelabgleich und visuelle Stichprobe jeder Reihe. |
| T05 | Keine überholten Vorschulaussagen: „Vorschule · in Entwicklung“, „Noch ohne Handouts“, „Handouts dafür gibt es noch nicht“, „Zwei Stapel“. | Suche in den drei aktuellen HTML-Dateien, DOM und Meta-Beschreibungen. Historische .bak-Dateien nicht verändern. |
| T06 | Keine aktuelle Sportwerbung mit acht Blättern, Krippe, ca. 30 Minuten oder alten Sportpaaren. Bewegungskicker nennt Kindergarten. | Suche und Sichtung des gesamten Bewegungsabschnitts. „Krippe“ bleibt in der bestehenden Berufsbiografie erlaubt. |
| T07 | Wortfamilie „Bewegungsstunde“ aus neuen Gegenwarts-Angebotstexten entfernt. | Trefferliste mit erlaubten Ausnahmen: technischer Alias `bewegungsstunden` sowie genau die historische Gründungsaussage in about.html „Angefangen hat bewegt & bunt mit Bewegungsstunden …“. Weitere Treffer begründen oder korrigieren. |
| T08 | Sport und Vorschule heißen Testfassungen; keine Behauptung gestarteter/abgeschlossener Praxistests, keine Termine oder Freigaben dafür. | Redaktionelle Sichtung aller Bereichs-, Prozess- und Kontakttexte. Bestehende Morgenkreis-Praxisformulierungen bleiben ausdrücklich auf Morgenkreis begrenzt. |
| T09 | Vorschule deckt Zählen, Zuhören, Ordnen und Gestalten ab. Materialien stehen im jeweiligen Handout; keine Zusage „nur Stifte“ oder gleichartige Arbeitsblätter. | Text- und Sichtvergleich T50–T53. |
| T10 | Bauernhof nennt vier Morgenkreise und eine bereits vorhandene Vorschuleinheit als Entwurf; Zoo nur den vorhandenen ersten Morgenkreis. | Vergleich T80; keine vollständigen drei Bereiche für Bauernhof oder Zoo behaupten. |
| T11 | Biografie, Beruf und Kontaktfakten bewahrt; keine neuen Erfahrungsjahre, Zertifikate, Testimonials oder Erfolgsversprechen. | Gezielt verglichene about-Absätze, T90 und Kontakt-/Fußzeilen. |
| T12 | Keine internen Rollen, Prüfstufen, Fassungsnummern, Git-/Cloud-Anweisungen oder Dateipfade im Besuchertext. | DOM-Text und sichtbare Seite prüfen. „Testfassung“ und vorhandener KI-Bildhinweis sind beabsichtigt. |
| T13 | Neue Publikumstexte bestehen die mechanische Wortprüfung im Umfang `handout`; redaktionelle Prüfung getrennt. | Der mitgelieferte WORTPRUEFUNG_A01.md belegt die lokale mechanische Prüfung der reinen PUBLIC-Texte. Im gebauten HTML selbst erneut die Wortfamilie Erzieher einschließlich Zusammensetzungen prüfen (Unicode-/Großkleinschreibung beachten); der lokale Bibliothekshelfer ist in der Cloud nicht erforderlich. Bildtext separat gegen gebundene Bildquellen, nicht als automatisch geprüft ausgeben. |

Die Wortregel `handout` erfasst die Wortfamilie Erzieher; allgemeine Wir-/Unser-Formen sind für diese Website nicht ausgeschlossen. Insbesondere der gebundene Produkttitel „Unser Wald aus Formen“ bleibt unverändert. „In Entwicklung“ nicht blind global sperren: Gegenstand ist die falsche Behauptung fehlender Vorschulhandouts, nicht jede sachliche Beschreibung von Entwicklung.

## 4 · Bilder und sichtbare Struktur

| ID | Soll | Erforderlicher Beleg |
|---|---|---|
| B01 | Alle acht gelieferten Bilder stimmen am Ziel mit den Hashes des Bildmanifests überein. | Hashvergleich Quelle/Ziel. Keine neue Verkleinerung oder Konvertierung ohne eigenen Auftrag. |
| B02 | Sport 04 zeigt W02; Sport 01–03 und Vorschule 01–04 entsprechen dem Manifest. | Bild-/Produkt-Tabelle und tatsächliche Sichtung der acht Bilder. W01 für Sport 04 = STOPP. |
| B03 | Vier vorhandene Morgenkreis-PNGs unverändert und richtig zugeordnet. | Hashvergleich zum Ausgangsbaum und Sichtung der Zuordnung; ein Dateiname allein ist kein Bildinhaltbeleg. |
| B04 | In den Produktreihen erscheinen vollständige Handoutseiten proportional, ohne Beschnitt, Verzerrung oder aufgesetzten Text. | Sichtung jeder Kartenreihe bei 390 und 1440 px; Seitenverhältnis und natürliche Bildgrößen aus DOM. |
| B05 | Alle verwendeten Bilder laden vollständig; keine kaputten oder unscharf hochgezogenen Ersatzbilder. | `complete` und `naturalWidth > 0`, Netzfehlerliste, Bildschirmansichten. Echte intrinsische Maße im HTML verwenden. |
| B06 | Dekorative Wiederholungen in den Bereichskarten haben leeres alt; die Bereichszuordnung steht sichtbar daneben. Produktkarten haben sichtbare Titel und Nummern. | DOM-Prüfung und Prüfung zugänglicher Namen; keine vierfach vorgelesenen Titel durch redundante Bildtexte. |
| B07 | KI-Bildhinweis „Abbildungen: Testfassungen · Bilder KI-generiert.“ sichtbar vorhanden. | Wortvergleich und Einstiegsscreenshot. Keine aus Bildvorschauen abgeleitete Veröffentlichungsfreigabe. |
| S01 | Einstieg enthält einmal die kombinierte Bereichsorientierung mit drei kleinen Bildgruppen; kein zusätzlicher großer Fächerblock und keine zweite Übersicht. | DOM-Abschnittsliste und Startansichten 320/360/390/768/1440. |
| S02 | Unter 620 px Bildfläche je Überblickskarte höchstens 128 CSS-Pixel hoch; Karten wachsen mit Text, alle Links erreichbar. | Gemessene Bildflächenhöhe bei 320/360/390; Sichtbeleg. Keine feste Gesamtkartenhöhe, die Text abschneidet. |
| S03 | Direkt nach Einstieg/Überblick folgen Morgenkreis, Bewegungseinheiten, Vorschule. Säulen/Haltung und Arbeitsweise folgen erst danach. | DOM-Reihenfolge und Gesamtansichten. |
| S04 | Eine H1 pro Seite; klare Überschriftenfolge H1 → H2 → H3. Kartentitel zu ihrem Bereich verständlich. | Überschriftenliste aller drei Seiten. Keine ausgelassene Ebene durch neue Komponenten. |

## 5 · Darstellung, Schriften und Bedienung

Pflichtbreiten in CSS-Pixeln: **320, 360, 390, 768 und 1440**. Für jede Breite alle drei Seiten prüfen. Verwendete Höhe und Gerätepixelfaktor protokollieren; empfohlen 900 px Höhe und Faktor 1 für vergleichbare Messbilder. Zusätzlich mindestens eine reale Telefonhöhe (z. B. 390 × 844) für den Einstieg. Kein Beleg darf vor dem Ende von `document.fonts.ready` oder bei noch ladenden relevanten Bildern aufgenommen werden. Lokale Schriften verwenden, kein externer Schriftabruf.

| ID | Soll | Erforderlicher Beleg |
|---|---|---|
| L01 | Kein waagerechter Dokumentüberlauf bei jeder Pflichtbreite auf jeder Seite. | Pro Seite/Breite `documentElement.scrollWidth`, `clientWidth` und Ergebnis. **Zusätzlich** Elemente auf außerhalb des Ansichtsfensters liegende Rechtecke prüfen: vorhandenes `overflow-x: hidden` darf Fehler nicht verstecken. Bewusst begrenzte dekorative Fächer gesondert ausweisen. |
| L02 | Kein abgeschnittenes Wort, keine überlappenden Karten, keine unsichtbaren Knöpfe; keine Kopfzeile verdeckt Sprungziele. | Sichtprüfung und Elementmessung, besonders „Bewegungseinheiten“, lange Kartentitel, E-Mail und Hauptüberschrift. Keine pauschale Reparatur durch `word-break: break-all`. |
| L03 | Sechs Navigationslinks bleiben bei 320/360/390 px sichtbar und berührbar. | Screenshot jeder schmalen Breite, Maße der Navigation und manueller Linktest. Mindesthöhe interaktiver Hauptziele 44 CSS-Pixel; keine überlagernden Ziele. |
| L04 | Tastaturreihenfolge entspricht der Lesereihenfolge; alle interaktiven Elemente erreichbar; Fokus gut sichtbar und nicht abgeschnitten. | Tatsächlich durchgeführter Tab-/Shift-Tab-/Enter-Test auf allen drei Seiten bei 390 und 1440 px, Fokusbilder je unterschiedlichem Navigationstyp. Kein positiver tabindex und keine Fokusfalle. |
| L05 | Bilder und Beschriftungen bleiben ohne Animation eindeutig. | Prüfung mit reduzierter Bewegung (`prefers-reduced-motion: reduce`); keine inhaltlich notwendige Animation oder versteckte Hover-Beschriftung. |
| L06 | Normaltext und Fokus ausreichend kontrastreich, insbesondere auf dunklem Bewegungsabschnitt und grünen Schaltflächen. | Erfasste Farbpaare; Textkontrast mindestens 4,5:1, große Schrift mindestens 3:1, Fokus-/Bedienkonturen mindestens 3:1 zum angrenzenden Hintergrund. |
| L07 | 200 % Zoom bei 1440 px und einspaltige Telefonansicht bleiben vollständig bedienbar. | Tatsächliche Prüfung und Befund; keine abgeschnittenen Link- oder Inhaltstexte. |
| L08 | Schriften sind vor jeder Messung geladen; keine Ersatzschrift als vermeintlicher Endbeleg. | Zeitpunkt/Ergebnis `document.fonts.ready`, verwendete Schriftfamilien und Schriftladefehler je Prüflauf. Nach Schriftladen nochmal messen. |

## 6 · Verweise und Sprungziele

| ID | Soll | Erforderlicher Beleg |
|---|---|---|
| N01 | Alle IDs eindeutig. Neue und alte Anker führen zum jeweiligen sichtbaren Bereich. | IDs zählen; `#bereiche`, `#morgenkreis`, `#bewegungseinheiten`, `#bewegungsstunden`, `#vorschule`, `#themenwelten`, `#arbeitsweise` tatsächlich öffnen. |
| N02 | Morgenkreis, Bewegung, Vorschule und Themenwelten funktionieren auch von about und contact. | Navigationsklicks von beiden Unterseiten bei 390 und 1440 px; korrekte URL plus sichtbares Ziel prüfen. Alte Direktadresse `/#bewegungsstunden` gesondert testen. |
| N03 | Kontaktseite, Über-mich-Seite, Markenlink und Rücklink funktionieren; Mailadresse korrekt. | Linkzielprüfung und lokale Navigation. `mailto:info@bewegtundbunt.de` nur Ziel prüfen; keine Nachricht senden. |
| N04 | Impressum und Datenschutz auf jeder Seite unverändert erreichbar. | Tatsächliche Zielprüfung mit Groß-/Kleinschreibung `/Impressum.html`, `/datenschutz.html`. Keine rechtlichen Dateien bearbeiten. |
| N05 | Produktkarten suggerieren keinen PDF-Download oder nicht vorhandenen Detailinhalt. | Sichtung von Mauszeiger, Linkzielen und zugänglicher Rolle; keine leeren Links oder `href="#"`. |

## 7 · Mindestumfang der tatsächlichen Sichtbelege

Dateinamen sollen Seite, Breite und Ausschnitt erkennen lassen. Aufnahmen zeigen die gebaute Seite im Browser, keine Entwurfsbilder und keine aus HTML abgeleiteten Ersatzansichten.

1. Startseite Einstieg inklusive kompletter drei Bereichskarten: 320, 360, 390, 768 und 1440 px. Falls der Inhalt nicht in eine Bildschirmhöhe passt, zusammenhängende Abschnittsaufnahme.
2. Vollständiger Vorschulabschnitt mit allen vier Karten: 390 und 768 px.
3. Je eine vollständige Morgenkreis- und Bewegungs-Kartenreihe: 390 und 1440 px.
4. Startseite als Gesamtansicht bei 390 und 1440 px; lesbare Ausschnitte aus 1–3 ergänzen die verkleinerte Langansicht.
5. Über mich und Kontakt jeweils vollständig bei 320 und 1440 px.
6. Sichtbarer Tastaturfokus bei 390 und 1440 px, mindestens Navigation und Kontaktknopf; auf Unterseiten mindestens Navigationsfokus.

Jeden Screenshot nach Aufnahme tatsächlich ansehen und den zugehörigen Befund nennen. Bildschirmaufnahmen sind notwendige Ergänzung zum Messprotokoll; ungesichtete Dateien beweisen keine Sichtprüfung. Kleinere Pflichtbreiten nicht allein aus einem 390-Pixel-Bild ableiten.

## 8 · Rücklauf

Liefern: tatsächlicher Stand und Dateiliste; ausgefüllte Matrix; kurze Zusammenfassung der Text-/Titel-/Bildzuordnung; Messergebnisse aller 15 Seite/Breite-Kombinationen nach Schriftladen; benannte Screenshotdateien mit Befunden; verbliebene WARN-/STOPP-Punkte; konkreter nächster Schritt. Abnahme- und Veröffentlichungsentscheidung bleiben getrennt. Falls ein Werkzeug fehlt, genau die dadurch ungeprüften Kriterien nennen und die übrigen unabhängigen Prüfungen durchführen. Eine nicht mögliche Screenshotprüfung wird nicht als bestanden ausgegeben.
