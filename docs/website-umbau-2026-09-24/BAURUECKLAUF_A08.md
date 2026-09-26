# Baurücklauf A08 – Supabase-Wachhalter (26.09.2026)

## Auftrag
Ein Wachhalter, damit das Supabase-Projekt der Anmeldung im kostenlosen Plan nicht nach 7 Tagen Inaktivität pausiert. Der App-Stand bleibt unverändert.

## Stand: einbaufertig, aber noch nicht im App-Repo
- Die Workflow-Datei liegt fertig unter `docs/website-umbau-2026-09-24/A08/supabase-wachhalten.yml`.
- **Nicht eingebaut:** Das Klonen von `bewegtundbunt-app` wurde in dieser Sitzung von der Sicherheitsprüfung abgelehnt. Das passt zur Hausregel in `CLAUDE.md` („kein Zugriff auf das App-Repository“). Ich habe das nicht umgangen. Deshalb habe ich im App-Repo nichts gelesen und nichts geändert.
- Einbau (René oder eine Sitzung mit App-Freigabe): Datei unverändert nach `.github/workflows/supabase-wachhalten.yml` im App-Repo kopieren, kommitten, und einmal „Run workflow“ auslösen.

## Was der Workflow tut
- Er läuft **Montag und Donnerstag um 04:17 UTC** (6:17 Uhr MESZ, 5:17 Uhr MEZ) und lässt sich zusätzlich von Hand über `workflow_dispatch` starten.
- Beim Lauf liest er `SB_URL` und `SB_KEY` (den öffentlichen anon-Schlüssel) aus `index.html`. Er braucht **keine neuen Geheimnisse** und **nichts in den Repo-Einstellungen**. Der Schlüssel wird im Protokoll maskiert.
- Den Tabellennamen liest er beim Lauf aus `admin_setup.sql`. Er nimmt die erste `create table` im Schema `public` und überspringt auskommentierte Zeilen.
- Er sendet genau **eine lesende REST-Abfrage**: `GET /rest/v1/<tabelle>?select=*&limit=1`. Ein leeres Ergebnis (`[]`, z. B. durch RLS) gilt als Erfolg.
- Er macht **drei Versuche** mit je 20 s Pause. Scheitern alle drei, wird der Lauf **rot**. Das gilt auch, wenn SB_URL, SB_KEY oder eine Tabelle nicht gefunden wird.
- Es gibt keine Datenbankänderung, keine Schreibabfrage und keine weiteren Dateien. Die Rechte sind auf `contents: read` beschränkt.
- Er kann alte anon-Schlüssel (JWT, `eyJ…`) und neue `sb_publishable_…`-Schlüssel verarbeiten.

## Geprüft
- Das YAML ist gültig.
- Das Auslesen wurde an einem Probe-Repo mit ausgedachten Werten getestet: URL mit Schrägstrich am Ende, Anführungszeichen gemischt, Tabelle mit Schema `public."…"`, auskommentierte und fremde Schema-Tabellen werden übersprungen.
- Der Fehlerpfad wurde getestet: drei Fehlversuche führen zu Exit 1.
- Ein echter Aufruf gegen Supabase war hier nicht möglich (kein Netz dorthin, kein App-Zugriff). Der erste Handlauf nach dem Einbau ist deshalb die eigentliche Probe.

## Wichtig
**Der Wachhalter läuft erst ab `main`, also mit dem Liveschalten.** GitHub führt Zeitpläne nur vom Standardzweig aus. Bis dahin hilft nur ein Handlauf oder ein Aufruf der App.

## Satz für René
Der Supabase-Wachhalter ist fertig. Er fragt Mo und Do früh eine Tabelle lesend ab, braucht keine Geheimnisse und wird bei Fehlschlag rot. Weil diese Sitzung das App-Repo nicht anfassen durfte, liegt er erst auf meinem Zweig bereit und muss nach `.github/workflows/` im App-Repo kopiert werden. Laufen wird er erst ab `main`, also mit dem Liveschalten.
