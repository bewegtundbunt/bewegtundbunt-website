# Website · Textquelle A01 für die erste Cloud-Baufassung

Datum: 24.09.2026. Redaktionelle Bauvorlage nach Hugos Planrunde und Gretas Quellenabgleich. Gilt zusammen mit dem Hauptbrief dieses Baupakets und dessen erlaubtem Umfang. Diese Datei entscheidet weder Produktfreigaben noch Veröffentlichung. Sie enthält eine feste Umsetzung, keine Textvarianten.

## 1 · Herkunft, Grenzen und Auslesekonvention

Die Zeilenangaben beziehen sich auf die unveränderten drei HTML-Ausgangsdateien auf staging@49fb5f3454f67289edc7718d62488d567b426176. Die aktuelle Cloud-Regeldatei ist bewusst neu; ihre Bindung steht im Paketmanifest. Die Hashes sämtlicher nachzumessender Repo-Dateien sind dort vollständig aufgeführt.

Der fachliche Bestand wurde am 24.09.2026 gegen das Wald-Produktregister A04 und spätere belegte Nachträge geprüft. Gesichert sind zwölf Titel, je vier Waldprodukte pro Bereich, Kindergarten als Zielgruppe der vier Sportprodukte, passende Kinderblätter zur Vorschule und ein vorhandener Vorschulentwurf auf dem Bauernhof. Der tatsächliche Erprobungsbeginn der aktuellen Sport-/Vorschulfassungen ist nicht bestätigt; keine Aussage dazu ergänzen. Bestehende Morgenkreis-Praxisformulierungen bleiben auf Morgenkreis begrenzt. „Testfassung“ ist keine Aussage über finale Freigabe oder abgeschlossenen Praxistest.

Die vollständigen lokalen Quellen sind zur Ausführung nicht erforderlich. Dieses Dokument enthält alle benötigten fachlichen Texte; BILDER_A01.json enthält die geprüfte Bildzuordnung. PDF-Quellhashes darin sind Herkunftsangaben, keine Anforderung, fehlende PDFs zu beschaffen.

Nur Text zwischen `<!-- PUBLIC … START -->` und `<!-- PUBLIC … END -->` ist neuer beziehungsweise ausdrücklich gebundener Publikumstext. Die Markierungen und alle redaktionellen Erläuterungen werden nicht in die Website übernommen. Für die Wortprüfung diese Blöcke in eine eigene reine Textdatei auslesen. Metadaten, Beschriftungen und barrierefreie Linktexte sind dabei mitzuprüfen. HTML-Zeichen korrekt maskieren, sichtbare Wörter und Satzzeichen beibehalten.

## 2 · Fester Seitenaufbau

1. Einstieg mit H1 und zwei kurzen Absätzen; direkt daran **ein einziger** Überblick `#bereiche` aus drei gleichrangigen Bereichskarten. Jede Karte verbindet Bildgruppe, Bereichsname, Kurztext und einen Link. Die bisherigen zwei Hero-Knöpfe, die isolierte große Fächerfläche und die gesonderte zweite Reihe mit Angebotskarten gehen in diesem Überblick auf.
2. Morgenkreis `#morgenkreis`: kurzer Einstieg, vier Waldkarten, vorhandener Morgenkreis-Ablauf und Artenüberblick.
3. Bewegungseinheiten `#bewegungseinheiten`: kurzer Einstieg, vier Waldkarten, knapper roter Faden.
4. Vorschule `#vorschule`: kurzer Einstieg, vier Waldkarten, Nutzen und sachlicher Stand.
5. Fantasie · Struktur · Ruhe: vorhandenen Abschnitt hierher verschieben, Texte unten.
6. Arbeitsweise `#arbeitsweise`.
7. Themenwelten `#themenwelten`.
8. Aus der Praxis gedacht; Kontaktübergang; Fußzeile.

Telefon: Bildgruppen bleiben klein und Teil derselben Bereichskarten. Keine Folge aus drei großen Bildfächern und danach nochmals drei Bereichskarten. Unter 620 px Bildfläche je Bereichskarte höchstens 128 CSS-Pixel hoch; Inhalt und Kartenhöhe dürfen mit Text wachsen. Einspaltig, ohne Karussell. Auf größeren Flächen drei gleichrangige Karten nebeneinander, sobald lesbar. Details zu den zwölf Handouts stehen erst in den drei Produktabschnitten. Keine Downloads oder neuen Detailseiten.

Alle alten Sprungziele erhalten: `morgenkreis`, `bewegungsstunden`, `themenwelten`, `vorschule`. `bewegungsstunden` wird ein nicht fokussierbarer Alias unmittelbar am neuen Abschnitt `bewegungseinheiten`; keine zweite inhaltliche Sektion, keine doppelte ID. Vorhandene Überschriften-IDs bleiben, sofern verknüpft; ein neuer Name darf alte Links nicht zerstören.

## 3 · Gemeinsam auf allen drei Seiten

### T01 · Seitentitel (jeweils Zeile 7)

Auf `index.html`:

<!-- PUBLIC T01a START -->
bewegt & bunt — Morgenkreis, Bewegungseinheiten und Vorschule für Kitas
<!-- PUBLIC T01a END -->

Auf `about.html`:

<!-- PUBLIC T01b START -->
Über mich — bewegt & bunt
<!-- PUBLIC T01b END -->

Auf `contact.html`:

<!-- PUBLIC T01c START -->
Kontakt — bewegt & bunt
<!-- PUBLIC T01c END -->

Die vorhandenen Meta-Beschreibungen von about und contact bleiben. Die Startseitenbeschreibung (Zeile 8) lautet:

<!-- PUBLIC T02 START -->
Morgenkreis, Bewegungseinheiten und Vorschule mit einer gemeinsamen Themenwelt: klar aufgebaute Handouts und passende Kinderblätter für die Vorschule unterstützen pädagogische Fachkräfte im Kita-Alltag.
<!-- PUBLIC T02 END -->

### T03 · Navigation

Auf allen drei Seiten dieselbe Reihenfolge und Schreibweise. Auf index mit `#…`, auf den Unterseiten mit `/#…`: Morgenkreis → `morgenkreis`; Bewegungseinheiten → `bewegungseinheiten`; Vorschule → `vorschule`; Themenwelten → `themenwelten`; Über mich → `/about.html`; Kontakt → `/contact.html`. Aktuelle Seite weiterhin mit `aria-current="page"` kennzeichnen. Markenlink `/`, Logo und „Hauptnavigation“ bleiben.

<!-- PUBLIC T03 START -->
Morgenkreis
Bewegungseinheiten
Vorschule
Themenwelten
Über mich
Kontakt
<!-- PUBLIC T03 END -->

### T04 · Fußzeile (index:835, about:106, contact:102)

<!-- PUBLIC T04 START -->
bewegt & bunt — Morgenkreis, Bewegungseinheiten und Vorschule für Kitas.
<!-- PUBLIC T04 END -->

Alle übrigen Fußzeilentexte und Ziele unverändert: E-Mail, Copyright, Leipzig, Impressum und Datenschutz. Keine neuen Kontaktdaten oder rechtlichen Aussagen.

## 4 · Startseite: Einstieg und Überblick

### T10 · H1, Positionierung, Einstieg (ersetzt index:563–570)

H1, zwei Sinnzeilen; natürlicher weiterer Umbruch erlaubt, kein erzwungenes Abschneiden:

<!-- PUBLIC T10a START -->
Der Wald wird wach.
Im Sitzkreis, in Bewegung und in der Vorschule.
<!-- PUBLIC T10a END -->

Positionierung:

<!-- PUBLIC T10b START -->
Morgenkreis, Bewegungseinheiten und Vorschule – verbunden durch eine gemeinsame Themenwelt.
<!-- PUBLIC T10b END -->

Einstiegsabsatz:

<!-- PUBLIC T10c START -->
bewegt & bunt entwickelt klar aufgebaute Handouts für den Kita-Alltag, für die Vorschule mit passendem Kinderblatt. Sie unterstützen pädagogische Fachkräfte bei der Vorbereitung und geben Kindern Raum zum Spielen, Lernen und Gestalten.
<!-- PUBLIC T10c END -->

### T11 · Drei integrierte Bereichskarten (ersetzt index:574–618)

Der Überblick `#bereiche` erhält die zugängliche Bezeichnung „Drei Bereiche entdecken“. Je eine gleichrangige H2, ein Kurztext, ein Link. Die vier Bilder je Bereich kommen aus derselben Zuordnung wie T20–T22. Diese wiederholten Bildgruppen sind dekorativ (`alt=""`), da die Karte den Bereich sichtbar erklärt. Keine zusätzlichen Bildlink-Ziele. In DOM- und Sichtreihenfolge Morgenkreis, Bewegungseinheiten, Vorschule.

<!-- PUBLIC T11label START -->
Drei Bereiche entdecken
<!-- PUBLIC T11label END -->

Karte Morgenkreis, Linkziel `#morgenkreis`:

<!-- PUBLIC T11a START -->
Morgenkreis · Kindergarten
Eine Geschichte, ein Spiel und vertraute Rituale öffnen im Sitzkreis die Themenwelt.
Zu den Morgenkreisen →
<!-- PUBLIC T11a END -->

Karte Bewegung, Linkziel `#bewegungseinheiten`:

<!-- PUBLIC T11b START -->
Bewegungseinheiten · Kindergarten
Aus vertrautem Material wird eine Themenstunde im Bewegungsraum – mit einem klaren Ablauf und Zeit zum Ausklingen.
Zu den Bewegungseinheiten →
<!-- PUBLIC T11b END -->

Karte Vorschule, Linkziel `#vorschule`:

<!-- PUBLIC T11c START -->
Vorschule · für die Großen im Kindergarten
Zählen, zuhören, ordnen, gestalten: Jede Vorschuleinheit verbindet ein Handout mit einem passenden Kinderblatt.
Zur Vorschule →
<!-- PUBLIC T11c END -->

Unter dem gesamten Überblick ein gemeinsamer Bildhinweis; ersetzt „Zwei Stapel, ein Haus …“ und bewahrt den bestehenden KI-Hinweis:

<!-- PUBLIC T12 START -->
Drei Bereiche, eine Themenwelt: je vier Wald-Einheiten für Morgenkreis, Bewegung und Vorschule.
Abbildungen: Testfassungen · Bilder KI-generiert.
<!-- PUBLIC T12 END -->

## 5 · Zwölf Produktkarten: feste Titel und Zuordnung

In jedem Produktabschnitt eine Reihe mit genau vier Karten in Nummernfolge. Jede Karte zeigt eine vollständige, proportional skalierte Handoutvorschau, sichtbare Bereichsnummer, Titel und „Testfassung“. Keine Karte wird zum Download-Link. Bild `alt=""`, weil Titel und Zuordnung daneben als Text stehen; Bilder sind kein Ersatz für die sichtbaren Texte. Kein produktbezogener Freigabestempel.

| Produkt-ID | Öffentlicher Kartenbezeichner | Bildpfad im Website-Repo |
|---|---|---|
| MORGENKREIS-WALD-01 | Morgenkreis 01 · Wald | `assets/handouts/morgenkreis-wald-1-wintervorrat-kiga.png` |
| MORGENKREIS-WALD-02 | Morgenkreis 02 · Wald | `assets/handouts/morgenkreis-wald-2-wind-kiga.png` |
| MORGENKREIS-WALD-03 | Morgenkreis 03 · Wald | `assets/handouts/morgenkreis-wald-3-laut-kiga.png` |
| MORGENKREIS-WALD-04 | Morgenkreis 04 · Wald | `assets/handouts/morgenkreis-wald-4-dach-kiga.png` |
| SPORT-WALD-01 | Bewegungseinheit 01 · Wald | `assets/handouts/sport-wald-01-kiga.png` |
| SPORT-WALD-02 | Bewegungseinheit 02 · Wald | `assets/handouts/sport-wald-02-kiga.png` |
| SPORT-WALD-03 | Bewegungseinheit 03 · Wald | `assets/handouts/sport-wald-03-kiga.png` |
| SPORT-WALD-04 | Bewegungseinheit 04 · Wald | `assets/handouts/sport-wald-04-kiga.png` |
| VORSCHULE-WALD-01 | Vorschule 01 · Wald | `assets/handouts/vorschule-wald-01.png` |
| VORSCHULE-WALD-02 | Vorschule 02 · Wald | `assets/handouts/vorschule-wald-02.png` |
| VORSCHULE-WALD-03 | Vorschule 03 · Wald | `assets/handouts/vorschule-wald-03.png` |
| VORSCHULE-WALD-04 | Vorschule 04 · Wald | `assets/handouts/vorschule-wald-04.png` |

Die öffentliche Benennung „Bewegungseinheit“ ersetzt nicht die internen stabilen SPORT-IDs. Die acht neuen Website-Bilder werden aus dem gesondert gebundenen Bildpaket übernommen. Sport 04 muss W02 abbilden; die alte Registervorschau W01 ist kein Ersatz. Die vier vorhandenen Morgenkreis-Bilddateien bleiben unverändert. Keine neu generierten Bilder und keine alten Sportbilder als Platzhalter.

T20 · Morgenkreiskarten (jeweils Bezeichner / H3 / Status):

<!-- PUBLIC T20 START -->
Morgenkreis 01 · Wald
Wo ist der Wintervorrat?
Testfassung
Morgenkreis 02 · Wald
Wer wiegt sich im Wind?
Testfassung
Morgenkreis 03 · Wald
Wer macht den Wald so laut?
Testfassung
Morgenkreis 04 · Wald
Welches Dach hält dicht?
Testfassung
<!-- PUBLIC T20 END -->

T21 · Bewegungskarten:

<!-- PUBLIC T21 START -->
Bewegungseinheit 01 · Wald
Frösche und Eichhörnchen
Testfassung
Bewegungseinheit 02 · Wald
Wildkatzen und Adler
Testfassung
Bewegungseinheit 03 · Wald
Wildschweine und Eichhörnchen
Testfassung
Bewegungseinheit 04 · Wald
Igel, Frösche und Adler
Testfassung
<!-- PUBLIC T21 END -->

T22 · Vorschulkarten:

<!-- PUBLIC T22 START -->
Vorschule 01 · Wald
Wir zählen im Herbstwald
Testfassung
Vorschule 02 · Wald
Ein Rascheln im Blätterwald
Testfassung
Vorschule 03 · Wald
Was gehört zusammen?
Testfassung
Vorschule 04 · Wald
Unser Wald aus Formen
Testfassung
<!-- PUBLIC T22 END -->

## 6 · Morgenkreis

Der Abschnitt behält `#morgenkreis` und die H2 „Eine Geschichte, ein Spiel, ein Ritual.“. Kicker und Einstieg (index:650–652) ersetzen durch T30. Direkt anschließend T31 als normale sichtbare Einleitung der Kartenreihe und T20 einfügen; keine zusätzliche H2 nötig. Die vorhandenen Ablauf- und Artenkarten sowie der Ritualhinweis bleiben wortgleich. Der bestehende Praxistest-Infokasten bleibt auf Morgenkreis begrenzt. Er folgt nach den vier Produktkarten und dem neuen Nutzensatz T32.

<!-- PUBLIC T30 START -->
Morgenkreis · Kindergarten
Eine Geschichte, ein Spiel, ein Ritual.
Ein Blatt, ein Morgen: Eine kurze Geschichte und ein Spiel führen in die Themenwelt. Vertraute Rituale begrüßen die Kinder und schließen den Kreis.
<!-- PUBLIC T30 END -->

<!-- PUBLIC T31 START -->
Die vier Wald-Morgenkreise
<!-- PUBLIC T31 END -->

<!-- PUBLIC T32 START -->
Das Handout führt durch den Morgenkreis. Material und Ablauf stehen auf einem Blatt, damit Sie die Einheit passend zu Ihrer Gruppe vorbereiten können.
<!-- PUBLIC T32 END -->

Die bestehende Schlusszeile (index:702) bleibt wörtlich und behauptet ausschließlich den bestehenden Morgenkreis-Praxistest:

<!-- PUBLIC T33 START -->
Den Morgenkreis gibt es zunächst für den Kindergarten. Die Blätter sind im begleiteten Praxistest – wie Sie mitmachen können, steht unter Kontakt.
<!-- PUBLIC T33 END -->

## 7 · Bewegungseinheiten

Den bisherigen Abschnitt index:706–774 inhaltlich vollständig nach diesem Abschnitt ersetzen. Dunkle Bereichsgestaltung kann bleiben, gleiche Kartenwertigkeit und gute Kontraste sicherstellen. Alte acht-Blätter-Paarliste, Krippen-Altersblock, Zeitangaben, alte Stundentypen und alte Ritualüberschriften entfallen. Kein aktuelles Krippenangebot behaupten.

Kicker / H2 / Einstieg:

<!-- PUBLIC T40 START -->
Bewegungseinheiten · Kindergarten
Die Kinder kommen in Bewegung.
Aus Hütchen werden Fliegenpilze, aus Matten Waldteiche. Die Wald-Einheiten verbinden Bewegung und Spiel mit einem klaren Aufbau für den Kindergarten.
<!-- PUBLIC T40 END -->

Reihentitel vor T21:

<!-- PUBLIC T41 START -->
Die vier Wald-Bewegungseinheiten
<!-- PUBLIC T41 END -->

Nutzen nach den vier Karten:

<!-- PUBLIC T42 START -->
Das Handout zeigt Material, Aufbau und Ablauf. Sie wählen die Einheit, die zu Ihrer Gruppe passt, und begleiten die Kinder in ihrem Tempo.
<!-- PUBLIC T42 END -->

Danach H2 und vier kurze Ablaufkarten (je H3 / Text):

<!-- PUBLIC T43 START -->
Der rote Faden einer Einheit
Ankommen
Die Kinder finden in die Themenwelt und stimmen sich auf die gemeinsame Bewegung ein.
Das erste Spiel
Das Handout beschreibt die Spielidee und gibt Hinweise für die Begleitung.
Das zweite Spiel
Ein weiterer Impuls lädt zum Bewegen und Ausprobieren ein.
Ruhig ausklingen
Ein gemeinsamer Abschluss führt aus der Bewegung in die Ruhe.
<!-- PUBLIC T43 END -->

Standsatz:

<!-- PUBLIC T44 START -->
Die gezeigten Bewegungseinheiten sind Testfassungen. Rückmeldungen aus dem Kita-Alltag sollen in ihre weitere Entwicklung einfließen.
<!-- PUBLIC T44 END -->

Keine konkreten Sport-Ritualtitel aus unterschiedlichen Fassungen vermischen. Die neutralen Website-Überschriften ändern keine Handouttexte und versprechen keinen identischen Ablauf in einer späteren Ausgabe.

## 8 · Vorschule

Vollwertiger neuer Abschnitt direkt nach Bewegungseinheiten, `#vorschule`. Der bisherige Zukunftsabschnitt index:813–819 entfällt an seiner alten Position. Kicker / H2 / Einstieg:

<!-- PUBLIC T50 START -->
Vorschule · für die Großen im Kindergarten
Zählen, zuhören, ordnen, gestalten.
In der Vorschule wird die Themenwelt zum Lernanlass. Jede Einheit verbindet ein Handout für pädagogische Fachkräfte mit einem passenden Kinderblatt – zum Zählen, Zuhören, Ordnen und Gestalten.
<!-- PUBLIC T50 END -->

Reihentitel vor T22:

<!-- PUBLIC T51 START -->
Die vier Wald-Vorschuleinheiten
<!-- PUBLIC T51 END -->

Nutzen:

<!-- PUBLIC T52 START -->
Das Handout führt durch die Einheit, das Kinderblatt gehört als Kopiervorlage dazu. Welche Materialien Sie benötigen, steht im jeweiligen Handout. Je nach Einheit wird auch geschnitten, gefaltet, geklebt und gestaltet.
<!-- PUBLIC T52 END -->

Stand:

<!-- PUBLIC T53 START -->
Die gezeigten Vorschuleinheiten sind Testfassungen. Rückmeldungen aus dem Kita-Alltag sollen helfen, Handouts und Kinderblätter weiterzuentwickeln.
<!-- PUBLIC T53 END -->

Kein festgelegter Erprobungsbeginn, kein Versprechen „nur Stifte“, keine Reduktion aller Kinderblätter auf Ausmalen/Ankreuzen/Eintragen. Keine internen Prüf- oder Rollennamen.

## 9 · Fantasie, Struktur, Ruhe

Vorhandenen Abschnitt index:621–642 hinter die drei Produktbereiche verschieben. H2 sowie die drei H3 bleiben. T60 enthält die vollständigen Texte in dieser Reihenfolge: H2; H3 und Absatz, dreimal.

<!-- PUBLIC T60 START -->
Fantasie für die Kinder. Struktur für die Stunde. Ruhe für Sie.
Fantasie für die Kinder
Aus vertrauten Dingen wird eine Welt: Im Sitzkreis öffnet sich das Waldtor, im Bewegungsraum werden Matten zu Waldteichen, und in der Vorschule entsteht ein Wald aus Formen. Die gemeinsame Themenwelt verbindet Geschichten, Bewegung und Gestaltung.
Struktur für die Stunde
Ein wiederkehrender Aufbau macht Material, Ablauf und Begleitung leicht auffindbar – im Morgenkreis, in der Bewegungseinheit und in der Vorschule. So können Sie sich auf Ihre Gruppe konzentrieren.
Ruhe für Sie
Kein Erfinden unter Zeitdruck: Das Blatt trägt den Ablauf – und lässt Raum für Ihre Gruppe. Sie entscheiden, was Ihre Kinder heute brauchen.
<!-- PUBLIC T60 END -->

## 10 · Arbeitsweise

Neuer Abschnitt `#arbeitsweise`, H2, ein Einleitungssatz, dann vier gleichrangige Ablaufkarten H3 + Absatz. Alle Verben beschreiben das Vorgehen; keine Behauptung, jede aktuelle Fassung habe die Schritte durchlaufen.

<!-- PUBLIC T70 START -->
So entsteht bewegt & bunt
Von der Idee bis zur nächsten Fassung: So sollen die Angebote im Kita-Alltag wachsen.
Ideen aus dem Alltag
Beobachtungen und Fragen aus dem Kita-Alltag geben den Anstoß für neue Angebote.
Entwickeln
Aus einer Idee entsteht eine Einheit mit klarem Aufbau, passend zur Themenwelt.
In der Praxis erproben
Eine Testfassung wird mit einer Gruppe ausprobiert. Dabei zeigt sich, was gut funktioniert und wo Unterstützung fehlt.
Rückmeldungen auswerten und verbessern
Erfahrungen aus der Praxis helfen, Texte, Abläufe und Materialien weiterzuentwickeln.
Nicht jede gezeigte Testfassung hat diesen Weg schon vollständig durchlaufen.
<!-- PUBLIC T70 END -->

## 11 · Themenwelten

H2 index:778 bleibt „Themenwelten. Die Klammer um alle Angebote.“. Einleitung, drei Karten und Schluss vollständig durch T80 ersetzen. Bauernhof enthält einen Vorschulentwurf, keinen pauschalen fertigen Vorschulbereich. Bestehende Morgenkreis-Praxisangaben sind als bestehender Website-Quellstand beibehalten.

<!-- PUBLIC T80 START -->
Themenwelten. Die Klammer um alle Angebote.
Der Wald verbindet erstmals alle drei Bereiche: je vier Morgenkreise, Bewegungseinheiten und Vorschuleinheiten. Bauernhof und Zoo erweitern die Themenwelten mit ihrem eigenen Entwicklungsstand.
Wald
Je vier Einheiten für Morgenkreis, Bewegung und Vorschule – verbunden durch die Tiere, Geschichten und Materialien des Waldes.
Bauernhof
Vier Morgenkreise im Praxistest. Dazu liegt eine Vorschuleinheit bereits als Entwurf vor.
Zoo
Erster Morgenkreis im Praxistest: Was steckt im Beutel?
Weitere Themenwelten können wachsen – für Morgenkreis, Bewegungseinheiten und Vorschule.
<!-- PUBLIC T80 END -->

## 12 · René und Kontakt

### T90 · Praxisabsatz Startseite (index:803)

H2 „Aus der Praxis gedacht“, Zitat und Link „Mehr über René →“ bleiben. Vollständiger Ersatzabsatz:

<!-- PUBLIC T90 START -->
René Krakow ist Ergotherapeut und begleitet Kinder individuell in Krippe und Kindergarten. bewegt & bunt ist aus diesem Alltag entstanden – aus einer einfachen Frage: Wie können Morgenkreis, Bewegungseinheiten und Vorschule klar vorbereitet sein und trotzdem offen für jedes einzelne Kind bleiben? Die Antwort steht auf jedem Blatt: Sie kennen Ihre Kinder. bewegt & bunt liefert Struktur und roten Faden.
<!-- PUBLIC T90 END -->

### T91 · Kontaktübergang Startseite (index:824–825)

H2 und Absatz; der bestehende Link „Kontakt aufnehmen“ zu `/contact.html` bleibt. Die persönliche Weitergabe bleibt in ihrer bisher belegten Reichweite auf Morgenkreis begrenzt.

<!-- PUBLIC T91 START -->
Neugierig auf Morgenkreis, Bewegungseinheiten oder Vorschule?
Die gezeigten Handouts sind Testfassungen. Die Morgenkreis-Handouts werden im begleiteten Praxistest eingesetzt und persönlich weitergegeben – zum Ausprobieren in Ihrer Gruppe, nicht zum Weitergeben. Wenn Sie eine Rückmeldung geben, einen Einblick erhalten oder mit Ihrer Einrichtung teilnehmen möchten, schreiben Sie mir gern – ich antworte zeitnah.
<!-- PUBLIC T91 END -->

### T92 · Über mich (about:98)

Ersten biografischen Absatz, Berufsangaben und Seitenüberschrift unverändert lassen. Im zweiten Absatz **nur den ersten Satz** ersetzen. Alles ab „Wiederkehrende Rituale …“ bleibt wörtlich, einschließlich der historischen Gründungsaussage „Angefangen hat bewegt & bunt mit Bewegungsstunden …“. Diese eine historische Benennung ist eine bewusste Ausnahme der Terminologieprüfung: Sie beschreibt den Anfang des Projekts, kein zusätzliches gegenwärtiges Angebot. Keine neue biografische Erzählung hinzufügen.

<!-- PUBLIC T92 START -->
Aus meiner täglichen Arbeit entstehen klar strukturierte Angebote für Morgenkreis, Bewegungsraum und Vorschule.
<!-- PUBLIC T92 END -->

### T93 · Kontakt (contact:93)

Einziger Textabsatz vollständig ersetzen; E-Mail und Rücklink bleiben.

<!-- PUBLIC T93 START -->
Schreiben Sie mir gerne eine E-Mail – ich antworte zeitnah. Ob Rückmeldung aus dem Praxistest, Frage zu Morgenkreis, Bewegungseinheiten oder Vorschule oder Interesse an einer Teilnahme mit Ihrer Einrichtung: Ich freue mich auf Ihre Nachricht.
<!-- PUBLIC T93 END -->

## 13 · Redaktionelle Schlussbindung

Unveränderte Besuchertexte werden nicht versehentlich gelöscht oder umformuliert. Für die drei Seiten sind die Ersetzungen hier abschließend benannt. Das betrifft insbesondere den erhaltenen Morgenkreis-Ablauf, Berufsbiografie, Kontaktadressen und rechtliche Links. Das neue Angebot für Vorschule, alle alten Vorschul-Platzhalter, der alte Sport-Altersblock und die alten Sportpaare dürfen nicht parallel stehenbleiben.

Keine weiteren Sport- oder Vorschul-Praxisaussagen ergänzen. Offene Produktarbeiten bleiben in den Produktakten; die Website-Baufassung arbeitet mit neutralen Testfassungen. Wortprüfung des neuen reinen Publikumstextes und spätere DOM-/Sichtprüfung sind getrennte Nachweise. Diese Textquelle allein meldet kein bestandenes Website-Layout.
