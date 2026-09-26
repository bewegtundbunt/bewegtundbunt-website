# Baurücklauf A08 · 26.09.2026

Wachhalter für das Supabase-Projekt der App-Anmeldung angelegt: `.github/workflows/supabase-wachhalten.yml`. Läuft Montag und Donnerstag um 05:17 UTC (früh morgens deutscher Zeit) und per Handstart (workflow_dispatch). Der Lauf stellt eine rein lesende REST-Abfrage `…/rest/v1/<Tabelle>?select=*&limit=1` mit dem anon-Schlüssel. Das berührt wirklich die Datenbank; ein leeres Ergebnis `[]` ist in Ordnung. Fehlende Einstellung, HTTP-Fehler (nach drei Wiederholungen), Zeitüberschreitung oder eine unerwartete Antwort machen den Lauf rot. Keine Schreibzugriffe, keine Rechte für den Ablauf (`permissions: {}`).

**Abweichung, offen für René:** Das Lesen von `index.html` und `admin_setup.sql` im App-Repository wurde in der Cloud-Sitzung verweigert (Sicherheitsfreigabe; `CLAUDE.md` schließt den App-Zugriff außerdem aus). Projekt-URL, anon-Schlüssel und Tabellenname stehen deshalb **nicht** im Repo. Der Ablauf liest sie aus den GitHub-Einstellungen dieses Website-Repos (Settings → Secrets and variables → Actions):

- Variable `SUPABASE_URL` – Projekt-URL aus `index.html` der App, z. B. `https://<projekt>.supabase.co`
- Variable `SUPABASE_TABELLE` – eine vorhandene Tabelle aus `admin_setup.sql`
- `SUPABASE_ANON_KEY` – öffentlicher anon-Schlüssel aus `index.html` (als Variable oder Secret)

Fehlt einer der drei Werte, wird der Lauf mit klarer Meldung rot. Damit landet nichts Geheimes im Repo, auch der anon-Schlüssel nicht.

Geprüft: YAML gültig (Zeitplan + Handstart erkannt), Shell-Syntax ok; lokal simuliert: fehlende Einstellung → Abbruch mit Exit 1, nicht erreichbarer Server → Abbruch mit Exit 1. Kein echter Lauf gegen Supabase (Werte lagen nicht vor).

**Hinweis:** Zeitgesteuerte Abläufe und der Handstart-Knopf wirken erst, wenn die Datei auf `main` liegt, also mit dem Liveschalten. GitHub pausiert Zeitpläne außerdem in Repos, die 60 Tage ohne Aktivität sind.

Sonst nichts geändert: App-Stand unverändert, keine Seiten angefasst, kein Merge, keine Veröffentlichung.

**Für René:** Der Wachhalter ist gebaut und stupst die Datenbank Mo und Do früh lesend an; damit er läuft, braucht er nach dem Liveschalten nur noch die drei Werte `SUPABASE_URL`, `SUPABASE_TABELLE` und `SUPABASE_ANON_KEY` in den GitHub-Einstellungen des Website-Repos.
