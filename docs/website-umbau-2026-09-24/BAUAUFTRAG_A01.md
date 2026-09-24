# Hugo · Website-Umbau · konkreter Cloud-Bau A01

**Datum:** 24.09.2026  
**Empfänger:** Hugo in einer neuen Claude-Code-Cloud-Sitzung  
**Repository:** bewegtundbunt/bewegtundbunt-website  
**Ausgangszweig:** vorbereitung/website-drei-bereiche-2026-09-24  
**Autonomie:** W1C – Arbeitsfassung auf eigenem Cloud-Arbeitszweig bauen, prüfen und dort speichern/übertragen; kein Merge und keine Live-Freigabe.  
**Rücklauf:** in dieser Cloud-Sitzung an René/Greta sowie unter 90_OUTPUT/WEBSITE_CLOUD_2026-09-24/.  
**Modellvorgabe:** Opus 5.5 · Denkstufe Mittel; keine automatische Umstellung.

## Auftrag

Setze den nachfolgenden bereits vorbereiteten Website-Umbau jetzt konkret um. Die Planrunde ist abgeschlossen. Baue keinen Shop, sondern eine verständliche Vorstellung der aktuellen Arbeit mit drei gleichwertigen Bereichen: **Morgenkreis → Bewegungseinheiten → Vorschule**. Jeder Bereich zeigt seine vier Wald-Einheiten mit korrektem Titel, Produktnummer, Vorschaubild und sichtbarem Hinweis „Testfassung“.

Die acht neuen Bilder sind in diesem Repository vorhanden; die Cloud benötigt keinerlei Mac-Pfade, lokale PDFs oder Notion-Zugriff. Insbesondere zeigt Sport 04 die aktuelle W02. Die Vorschaubilder sind unveränderte Inhaltsabbildungen und keine neue fachliche Freigabe.

## Vor dem Bau

1. `AGENTS.md`, diese Datei, `TEXTQUELLE_A01.md`, `ABNAHMEMATRIX_A01.md`, `BILDER_A01.json` und `PAKET_MANIFEST_A01.json` lesen (alle zuletzt genannten im selben Ordner).
2. Die im Paketmanifest gebundenen Ausgangsdateien, Dokumente und Bilddateien selbst mit SHA-256 nachmessen. Grundstand der drei HTML-Dateien ist staging@49fb5f3454f67289edc7718d62488d567b426176. Der Vorbereitungskommit fügt ausschließlich Auftrag/Regeln/Prüfbindungen und die acht PNGs hinzu; die drei HTML-Dateien sind darin unverändert.
3. Eigenen Cloud-Arbeitszweig verwenden. Den Vorbereitungszweig, staging und main nicht fortschreiben. Fehlende Quelle oder Abweichung gezielt melden; keine alten Dateien zurücksetzen und keine Ersatzbilder einsetzen.

## Verbindliche Korrekturen gegenüber Hugos erster Planrunde

- Kompakter Einstieg: Bereichsorientierung und kleine Bildgruppen zusammenführen. Keine drei großen Fächer vor einem weiteren dreifachen Kartenüberblick. Alle drei Bereiche müssen früh erreichbar sein.
- Haltung/Säulen erst nach den drei Produktbereichen. Vorschule bekommt dieselbe sichtbare Bedeutung und denselben Grundrhythmus.
- Sport zeigt vier aktuelle Kindergarten-Einheiten. Die alte Acht-Blätter-Paarliste samt Krippen-/Minutenblock entfällt. Renés berufliche Tätigkeit in Krippe und Kindergarten bleibt in der Biografie erhalten.
- Vorschule umfasst Zählen, Zuhören, Ordnen und Gestalten. Keine pauschale Beschränkung auf Ausmalen/Ankreuzen und keine Materialzusage „nur Stifte“.
- Keine unbelegte Behauptung, die aktuellen Sport-/Vorschulfassungen seien bereits in Erprobung oder würden unmittelbar als Nächstes erprobt. Der Ablauf wird als Arbeitsweise erklärt. Vorschule 02 Bauernhof liegt als Entwurf vor.
- Alte Sprungmarke `#bewegungsstunden` als Alias des neuen Bereichs `#bewegungseinheiten` erhalten. Auch bestehende weitere Bereichsanker erhalten.
- Bestehende Bild-/Testhinweise bewahren. Die 12 Titel sind für diesen Entwurf aus dem aktuellen Bestand gebunden; die endgültige Veröffentlichung wird erst anhand der gebauten Fassung entschieden.

## Gestaltung und Umsetzung

Bestehende statische HTML-/CSS-Grundlage, Markenfarben und lokale Schriften weiterverwenden. Keine neue Plattform oder zusätzliche Produktionsabhängigkeit. Drei gleichwertige Bereichskarten mit kompakten Bildgruppen und klaren Links; danach je Bereich kurzer Einstieg, vier Einheiten und konkreter Nutzen/Stand. Bildproportionen erhalten. Keine Vergrößerung der 380-Pixel-Vorschauen zu lesbaren Vollblatt-Downloads. Ausreichende Kontraste, sichtbarer Tastaturfokus und lesbare schmale Navigation.

Die Textquelle gibt die umzubauenden Publikumswortlaute konkret vor. Nur erforderliche HTML-Entitäten und typografisch identische Darstellung anpassen. Biografie außerhalb der benannten Erweiterung bewahren. Einzige erlaubte historische Ausnahme der Wortsuche nach „Bewegungsstunden“ ist die in der Textquelle ausdrücklich benannte Ursprungsaussage auf about.html; technische Altanker/alte ungenutzte Asset-Dateinamen bleiben ebenfalls Herkunft.

## Erlaubte Änderungen

Nur index.html, about.html und contact.html ändern. Geprüfte vorhandene Bilder verwenden, keine ursprünglichen Asset-Dateien löschen. Prüfbelege dürfen neu unter `90_OUTPUT/WEBSITE_CLOUD_2026-09-24/` angelegt werden. Jede darüber hinaus unvermeidbar erscheinende Änderung zuerst mit Befund melden.

Keine Änderungen an Impressum.html, datenschutz.html, fonts.css, assets/fonts/** oder *.bak. Keine PDF-Dateien, Trackingdienste, Shops, Logins oder App-Integration hinzufügen. Keine Veränderung von Hosting-/DNS-/Zugangsrechten. Kein Commit oder Push nach main/staging/Vorbereitung, kein Merge. Speichern/Push auf dem eigenen Cloud-Arbeitszweig ist für den Rücklauf beauftragt.

## Nachweis und Abschluss

Abnahmematrix tatsächlich ausführen, inklusive stabil geladener Schriften und visueller Kontrolle. Mindestens Startseite bei 320, 360, 390, 768 und 1440 Pixel Breite; Navigation aller drei HTML-Seiten, beide Bewegungsanker, Impressum/Datenschutz und Kontaktweg prüfen. Keine E-Mail abschicken. Nur korrektes mailto-Ziel nachweisen. Testdaten und Fehlerbelege speichern.

Liefere `90_OUTPUT/WEBSITE_CLOUD_2026-09-24/BAURUECKLAUF_A01.md` mit: Ausgangscommit und Arbeitszweig, konkrete Dateiliste/Diff, Wortlaut-/Bildabgleich, ausgeführte Prüfungen, Messwerte und Screenshotpfade, offene Punkte und Vorschauzugang. Der Rücklauf unterscheidet PASS/WARN/STOPP; ein Codevergleich allein beweist keine Sichtprüfung. Wenn eine Cloud-Plattform keinen Browser oder erforderliche Prüfmittel bereitstellt, die Grenze konkret benennen und kein visuelles PASS behaupten.

Am Ende eine kurze verständliche Zusammenfassung in der Sitzung. Die anschließende unabhängige Gegenprüfung und Renés finale Sichtfreigabe sind gesonderte Schritte.
