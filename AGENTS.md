# AGENTS.md · WEBSITE-REPO bewegtundbunt-website (Task-Regeln V1)
Dieses Repo ist der Arbeitsraum für die bewegt-und-bunt-Website. Ausgabe immer auf Deutsch.

Rollen: René = Direktion, einzige finale Freigabe · Anna/Fable = Führung dieser Runde, Textquelle, Konsolidierung · Oskar = Abnahmematrix, unabhängige Messung · Konrad = technische Umsetzung/Prüfung · Greta = Governance/QA. Cowork ist ausführender Arbeitsraum, nicht Entscheider.

Pflichtquellen vor jeder technischen Arbeit (alle im Governance-Ordner /Users/renekrakow/Desktop/bewegt-und-bunt-cowork):
1. der jüngste AKTIVIERTE Website-Startbrief in 01_STARTBRIEFE (Aktivierung nur durch Renés wortgleichen GO-Satz als eigene Nachricht)
2. die dort gebundene Abnahmematrix samt Addenda in 02_OSKAR
3. die dort gebundene Textquelle in 03_FABLE

Autonomie-Stufen Website (der Startbrief nennt genau eine; fehlt sie, gilt W0):
- W0 = nur lesen / melden / STOPP
- W1 = Arbeitsbaum-Write auf staging gemäß Startbrief-Allowlist · KEIN Commit · KEIN Reflog · HEAD/Tree bleiben unverändert · Bericht/Screenshots in den im Startbrief gebundenen 90_OUTPUT-Pfad
- W2 = ein Commit auf staging, nur nach ausdrücklichem Startbrief + GO · kein Push
- W3 = Push/Deploy/main — GESPERRT; ausschließlich René persönlich nach Oskar-PASS und Sicht-Freigabe

Erlaubt (in W1): Lesen im gesamten Website-Repo · Löschen einer leeren .git/index.lock, wenn der Startbrief sie als Löschziel bindet · Lesen der im Startbrief gebundenen Bildquellen (z. B. /Users/renekrakow/Desktop/Kika Praxis, read-only) · Schreiben NUR in die Startbrief-Allowlist.

Verboten immer: main-Write · Push · Deploy (Vercel/IONOS) · Löschen oder Überschreiben von Impressum.html, datenschutz.html, Schriftdateien, fonts.css, *.bak · Dateien außerhalb von Website-Repo, gebundenen Bildquellen und Governance-90_OUTPUT anfassen · Notion-Write · Veröffentlichung · Statussetzung · Kanonisierung. Das App-Repo (bewegtundbunt-app) ist nicht Teil dieses Tasks und wird weder gelesen noch beschrieben; seine Pflichtquellen gelten hier nicht.

Arbeitsweise: erst Vorzustand gegen die Startbrief-Anker prüfen (Branch/HEAD/Tree/Arbeitsbaum), dann handeln · bei Widerspruch, fehlendem Zugriff oder Risiko: STOPP mit Ist-Meldung · am Ende Kurzbericht, erzeugte Dateien, offene Punkte, nächster Schritt · Urteilsskala PASS/WARN/STOPP wie im Leitstand.
