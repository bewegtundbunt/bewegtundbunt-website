# Website-Auftrag · drei Bereiche · 24.09.2026

Ausgabe auf Deutsch. Dieses Repository gehört ausschließlich zur Website bewegt & bunt. Das App-Repository ist außerhalb des Auftrags.

## Aktiver Auftrag und Vorrang

Aktiv ist `docs/website-umbau-2026-09-24/BAUAUFTRAG_A01.md`, mit gebundener Textquelle, Abnahmematrix und Paketmanifest im selben Ordner. Der beauftragte Cloud-Bau ersetzt für diesen Auftrag ältere lokale W0/W1-Briefe und deren nicht erreichbare Mac-Dateipfade. Keine neue Planrunde und kein Warten auf einen weiteren wortgleichen GO-Satz: Der konkrete Bau ist beauftragt.

Genau eine Autonomiestufe: **W1C** – Website-Arbeitsfassung auf dem eigenen Cloud-Arbeitszweig erstellen, prüfen und dort speichern/übertragen. Startbasis ist `vorbereitung/website-drei-bereiche-2026-09-24`, abgeleitet von staging. Einen eigenen Sitzungszweig benutzen. **main, staging und den Vorbereitungszweig nicht verändern; kein Merge; keine aktive Veröffentlichung oder Vercel-/IONOS-Konfiguration.** Die Cloud darf ihren eigenen Arbeitszweig mit dem Bau zur Prüfung hochladen. Technische Plattform-Vorschauen sind keine Abnahme der Live-Seite.

## Zuständigkeit

Hugo baut. Konrad prüft anschließend die konkrete technische Fassung unabhängig. Greta bündelt Inhalt/Tragfähigkeit. René entscheidet final über die Veröffentlichung. Kein technischer Test erteilt eine Produkt- oder Praxisfreigabe.

## Schreibumfang für Hugo

Ändern: `index.html`, `about.html`, `contact.html`.
Neu erzeugen: `90_OUTPUT/WEBSITE_CLOUD_2026-09-24/**` für Prüfbericht, Messdaten, Screenshots und erforderliche kleine Prüfscripte. Keine personenbezogenen oder geheimen Daten in Prüfbelege aufnehmen.

Die acht neuen PNGs unter `assets/handouts/` sind bereits geprüft bereitgestellt und bytegleich zu verwenden. Die vier vorhandenen Morgenkreis-PNGs bleiben unverändert. Auftrag, Textquelle, Regeln und Paketmanifest nicht eigenmächtig umschreiben. Bei einem belegten Konflikt gezielt melden.

Impressum.html, datenschutz.html, assets/fonts/**, fonts.css, *.bak, alle übrigen vorhandenen Bilder, bestehende Git-/Hosting-Konfiguration und andere Dateien bleiben unverändert. Keine PDFs oder neuen externen Schriften/Tracker hinzufügen. Keine Bilder generieren. Keine Dateien löschen. Vorhandene HTML-Abschnitte dürfen innerhalb der drei beauftragten HTML-Dateien gezielt ersetzt werden.

## Arbeitsweise

Zuerst Paket- und Quellhashes nachmessen. Bei fehlendem Bild, Hashabweichung oder widersprüchlicher Quelle an dieser Stelle anhalten und Ist-Fassung melden; nichts zurücksetzen. Danach Auftrag umsetzen, passende reale Layout-/Link-/Tastaturtests durchführen, bei Breitenmessungen `document.fonts.ready` abwarten und tatsächliche Screenshotbelege liefern. Nicht ausgeführte Tests als offen kennzeichnen. Testfassungen und KI-Bildhinweis quellengetreu sichtbar halten. Kein pauschales Praxisversprechen.
