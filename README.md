# FileTransferAWS Frontend

Kleines Frontend-Projekt zum Hochladen und Verwalten von Dateien in AWS S3.

## Dazugehöriges Backend
[https://github.com/markusschneider2710/FileTransferAWS-Backend)

## Was kann die App?

* Login / Authentifizierung
* Dateien hochladen
* Dateien herunterladen
* Dateien löschen
* Speicherung läuft über AWS S3

## Tech Stack

* React (mit TypeScript)
* Vite
* AWS Amplify

## Setup

Repo klonen und Dependencies installieren:

```bash
git clone https://github.com/markusschneider2710/FileTransferAWS-Frontend.git
cd FileTransferAWS-Frontend
npm install
```

## Starten

```bash
npm run dev
```

Dann im Browser öffnen:
[http://localhost:5173](http://localhost:5173)

## AWS Konfiguration

Die Config liegt hier:

```
src/aws-config.ts
```

Dort musst du deine eigenen AWS-Werte eintragen (z. B. für S3 und Cognito), sonst funktioniert nichts.
