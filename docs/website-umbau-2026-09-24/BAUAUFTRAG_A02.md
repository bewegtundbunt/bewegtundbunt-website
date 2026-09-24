# Hugo · Website-Sichtrunde A02

Datum: 24.09.2026. Auftrag: René hat die Vorschau angesehen und die folgende Überarbeitung ausdrücklich beauftragt. Autonomie: **W1C**. Auf demselben Arbeitszweig `hugo/website-drei-bereiche-2026-09-24` weiterarbeiten. Ausgangsstand vor dieser Bereitstellung: `297c50d5602080aa79a3ba262fc5f9ba01880a28`; Website-Dateien darin entsprechen noch der geprüften Baufassung `450fa1587fc9856d7dc4e39d481a2497b6406ecc`.

Dieser konkrete neue Sichtauftrag ersetzt widersprechende A01-Vorgaben, insbesondere die zwölf Einzelkarten, den alten Einstieg, die alten Vollseitenbilder und die sichtbaren Testfassung-Texte. Die fachlichen Originale selbst bleiben unverändert. Die alte Abnahmematrix gilt nur für unverändert fortgeltende Bedienanforderungen, nicht als Sperre gegen diese Änderungen. Keine neue Plan-/GO-Runde.

## 1 · Ziel

Eine kürzere, bildbetonte Website-Vorschau. Keine vollständigen Handoutseiten mehr im aktiven HTML laden oder als große Einzelkarten zeigen. Dafür ausschließlich die gelieferten neuen Ausschnittdateien unter `assets/previews/a02/` verwenden. Das Manifest nennt jeweils Maße, Zuordnung und Hash. Kein PDF, keine Vollseiten-Datei nachladen, kein Hintergrund-Vollbild hinter einer CSS-Maske, keine Vergrößerungs- oder Downloadfunktion. Historische Dateien bleiben als Bestand liegen; daraus keinen behaupteten technischen Kopierschutz ableiten.

Die zwölf Wald-Dateien sind bewusst reine Illustrationsausschnitte (320×213), keine ganzen Blattminiaturen. Für die Fächerdarstellung als kleine gerahmte Materialeinblicke verwenden; keine künstlichen Ablauftexte, Blindtextzeilen oder rekonstruierten Vollblätter ergänzen. Zoo enthält den originalen oberen Titel-/Materialausschnitt, das Kinderblatt einen begrenzten Aufgabenausschnitt.

## 2 · Einstieg und Fächer

- H1 ersetzen durch **„Mit Themenwelten durch den Kita-Alltag“**.
- Hero neu anordnen: links H1 und die bestehende kurze Einordnung; rechts oben ein Dreierfächer aus gelieferten Ausschnitten. Stapel von hinten/unten nach vorn/oben: **Sport Wald 01 → Morgenkreis Zoo 01 → Vorschule Wald 04**. Das ist die spätere, maßgebliche Zusammenstellung aus Renés Ansage; nicht drei Morgenkreisblätter verwenden.
- Bestehende drei Bereichskarten bleiben in der Reihenfolge Morgenkreis, Bewegungseinheiten, Vorschule. Ihre Fächer enger überlappen lassen und die Überdeckungsrichtung gegenüber A01 umkehren, damit vor allem Bildflächen zu sehen sind. Die Pixelinhalte der Bilder niemals spiegeln. Mit `z-index`/Reihenfolge und Winkeln arbeiten; jede Illustration soll unterscheidbar bleiben.
- Jeder Bereichsfächer enthält genau **vier verschiedene** passende Ausschnitte (Wald 01–04). Kein doppeltes Motiv innerhalb desselben Viererfächers. Proportionen erhalten, keine großen Ersatz-Vollseiten bauen.
- Alle drei unteren Textlinks in diesen Bereichskarten entfernen („Zu den Morgenkreisen“, „Zu den Bewegungseinheiten“, „Zur Vorschule“). Die Hauptnavigation oben bleibt vollständig bestehen.
- Die drei bestehenden Kartentitel und Beschreibungen bleiben. Optional kleine, ruhige Kennzeichnung „Themenwelt Wald“ je Bereichskarte; kein weiterer erklärender Absatz.
- Den bisherigen zweiteiligen Überblickshinweis ersetzen durch: **„Einblicke in Morgenkreis, Bewegungseinheiten und Vorschule. Bilder KI-generiert.“**

## 3 · Morgenkreis

- H2 „Eine Geschichte, ein Spiel, ein Ritual.“ mit Einleitung erhalten.
- Die Reihe „Die vier Wald-Morgenkreise“ samt allen vier großen Handoutkarten und Statusetiketten vollständig entfernen. Auch den unmittelbar folgenden Absatz „Das Handout führt durch den Morgenkreis …“ entfernen, damit die Streichung keine verwaiste Erklärung hinterlässt.
- Den ganzen Kasten „Sie testen gerade ein Morgenkreis-Handout von bewegt & bunt?“ entfernen.
- **„So läuft ein Morgenkreis“ und die vier Ablaufkarten bleiben.**
- Den ganzen dunkelgrünen Absatz `.ritual-note` beginnend „In den Morgenkreisen zum Suchen und zum Verwandeln …“ entfernen.
- Die vier Artenkarten bleiben. In „Suchen & Merken“ den Absatz ersetzen durch: **„Etwas liegt versteckt – unter drei Bechern, unter einem Tuch, in einem Fühlbeutel. Die Kinder suchen, tasten und merken sich, was sie gefunden haben.“**
- „Bewegen & Verwandeln“, „Hören & Klingen“, „Forschen & Staunen“ und die übrigen erhaltenen Morgenkreisformulierungen unverändert lassen.

## 4 · Bewegungseinheiten

- Den oberen Inhaltsblock mit H2 „Die Kinder kommen in Bewegung.“, Einleitung, Überschrift „Die vier Wald-Bewegungseinheiten“, vier Vollseitenkarten und nachfolgendem Nutzenabsatz entfernen.
- Den Abschnitt selbst mit `#bewegungseinheiten` und Altalias `#bewegungsstunden` erhalten.
- **„Der rote Faden einer Einheit“** wird die primäre H2 dieses Abschnitts und erhält `id="bewegungseinheiten-title"`. Kicker „Bewegungseinheiten · Kindergarten“ direkt darüber erhalten. Den künstlichen oberen Abstand der bisherigen Folgeüberschrift entfernen.
- Alle vier zugehörigen Ablauftexte/Schritte unverändert erhalten. Dunkelgrüne Gestaltung bleibt.
- Den abschließenden `.row-status`-Kasten entfernen.

## 5 · Vorschule und Kinderblatt

- Kicker, H2 „Zählen, zuhören, ordnen, gestalten.“ und bestehende Einleitung erhalten.
- Die Reihe „Die vier Wald-Vorschuleinheiten“ und alle vier Vollseitenkarten vollständig entfernen. Den `.row-status`-Kasten entfernen.
- Stattdessen ein kleiner Bild-/Textblock. Ein gefächerter Einblick zeigt den **Kinderblatt-Ausschnitt Wald 04 vorne**, dahinter die unterschiedlichen Handout-Ausschnitte Vorschule Wald 01 und Wald 04. Diese drei Ausschnitte sind bewusst unterschiedliche Ausschnitte, kein wiederholtes Kinderblatt. Der Kinderblatt-Ausschnitt bleibt der klar erkennbare Hauptblick; kein voller Aufgabensatz wird zusätzlich rekonstruiert.
- H3: **„Aus Papier wird ein eigener Wald“**.
- Absatz 1: **„Zum Handout gehört ein Kinderblatt, das die Idee aufgreift. Bei ‚Unser Wald aus Formen‘ gestalten die Kinder ihren Wald mit Papierformen, fahren einfache Formen nach und erkennen Formen beim Zuhören in einer Geschichte.“** (Typografisch deutsche Anführungszeichen für den Titel verwenden.)
- Absatz 2: **„Je nach Einheit wird gezählt, genau hingehört, zugeordnet, nachgezeichnet oder gestaltet. Auch Schere, Papier und Kleber können dazugehören. Welche Materialien benötigt werden, steht im jeweiligen Handout.“**
- Kurze Bildunterschrift: **„Einblick in ein Kinderblatt zur Themenwelt Wald.“**
- Keine erfundene „Malen nach Zahlen“-Aufgabe und keine Materialzusage für alle Einheiten. Zum Kinderblatt-Original ist dies nur eine Ansicht, kein Produktumbau.

## 6 · Weitere Streichungen und ausdrücklich Erhaltenes

- Kompletten Abschnitt `#arbeitsweise` **„So entsteht bewegt & bunt“** entfernen. Kein leerer Platzhalter.
- Alle sichtbaren Vorkommen der Wortfamilie **Testfassung** aus der Startseite entfernen. Keine Reife-/Freigabezusage als Ersatz. Die fachliche Einordnung der Originale ändert sich dadurch nicht.
- Im Kontaktabsatz nur den ersten Satz **„Die gezeigten Handouts sind Testfassungen.“** entfernen. Der anschließende sachlich begrenzte Morgenkreis-Praxistesttext, Kontaktüberschrift und Kontaktknopf bleiben.
- **Unverändert erhalten:** gesamter Säulenabschnitt „Fantasie für die Kinder. Struktur für die Stunde. Ruhe für Sie.“, gesamter Themenweltenabschnitt, gesamter Praxisabschnitt einschließlich Biografie und Hütchen-Zitat, Kontaktweg, Fußzeile, Hauptnavigation. Bestehende Aussagen zu Bauernhof/Zoo nicht erweitern.

## 7 · Umfang und Schutz

Fachlich nur `index.html` ändern. Die neuen gelieferten Ausschnitte bleiben bytegleich. Neue Prüfbelege ausschließlich unter `90_OUTPUT/WEBSITE_SICHTRUNDE_A02/`. Alte Berichte/A01-Quellen nicht umschreiben. Keine Änderungen an about.html, contact.html, Impressum.html, datenschutz.html, Schriften, bestehenden Assets, Hosting, DNS, Zugängen oder App-Repository. Keine Dateien löschen. main, staging und Vorbereitung unverändert lassen; kein Merge. Eigener Zweig/Entwurfs-PR #3 ist der beauftragte Rücklauf. Kein neuer PR nötig.

## 8 · Begrenzte tatsächliche Prüfung und Rücklauf

1. Vor Bearbeitung Ausgangsdateien und neue Paketdateien gegen `PAKET_MANIFEST_A02.json` messen. Änderungen im Cloud-Arbeitsbaum nicht zurücksetzen: aktuellen Remote-Stand holen und nur fast-forward übernehmen; bei echter Fremdänderung gezielt melden.
2. Nach Bau: richtige drei Hero-Quellen und Schichtung; je vier verschiedene Ausschnitte in den drei Bereichsfächern; keine Vollseiten-Referenz `assets/handouts/` im aktiven index.html und keine `.product-row`/`.product-card` mehr. Alle expliziten Streich-/Bleibepunkte anhand DOM und Diff prüfen. Wortfamilie Erzieher und Testfassung im neuen DOM 0 Treffer.
3. Tatsächliche Startseite bei320/360/390/768/1440px nach `document.fonts.ready` und geladenen Bildern prüfen: kein waagerechter Überlauf, keine abgeschnittenen Fächer oder Texte, keine ungewollte Spiegelung, keine übergroßen Leerstellen. Engere Fächer im Vergleich zu A01 visuell beurteilen; es sind echte Ausschnittdateien.
4. Hauptnavigation, beide Bewegungsanker, Vorschule, Themenwelten, Über mich und Kontakt prüfen; Tastaturfokus für verbleibende Navigation und Kontakt sichtbar. Keine E-Mail senden. Keine unveränderten Tests ohne Anlass mehrfach durchlaufen.
5. Mindestens Einstieg Desktop/Telefon, drei Bereichskarten zusammen, Morgenkreis nach Streichungen, Bewegungsabschnitt sowie Kinderblattblock tatsächlich ansehen. Messungen erst nach Scroll-Stillstand. Keine pauschale Gleichsetzung von simuliertem und echtem Browserzoom.
6. Knappen `BAURUECKLAUF_A02.md` mit Stand, Änderungen, tatsächlich geprüften Punkten, wenigen aussagekräftigen Screenshots und ehrlichen Restgrenzen liefern. Prüfbericht zählt eigenständige Dateien, keine doppelt überschriebenen Aufnahmen.
7. Auf demselben Arbeitszweig speichern/pushen, bestehenden Entwurfs-PR #3 falls nötig beschreibend nachführen; nicht mergen. Danach beenden. **Keine automatische PR-Überwachung, keine geplanten Folgeläufe und kein neues Abo.** Die nächste Runde kommt von René/Greta.
