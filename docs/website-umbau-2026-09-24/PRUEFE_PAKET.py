from pathlib import Path
import hashlib, json, sys
root = Path(__file__).resolve().parents[2]
manifest = json.loads((Path(__file__).parent / "PAKET_MANIFEST_A01.json").read_text())
errors = []
for entry in manifest["sha256Bindings"]:
    path = root / entry["path"]
    if not path.is_file():
        errors.append(entry["path"] + ": fehlt")
        continue
    data = path.read_bytes()
    if len(data) != entry["bytes"] or hashlib.sha256(data).hexdigest() != entry["sha256"]:
        errors.append(entry["path"] + ": SHA/Bytezahl weicht ab")
if errors:
    print("STOPP: Paketbindung abweichend\n" + "\n".join(errors))
    sys.exit(1)
print("PASS: " + str(len(manifest["sha256Bindings"])) + " Ausgangsdateien/Paketbindungen stimmen. Dies ist kein Layout- oder Freigabeurteil.")
