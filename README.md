# 📦 FileTransferAWS Frontend

Ein einfaches Frontend zum Hochladen und Verwalten von Dateien in AWS S3.

## 🚀 Features

* 🔐 Benutzer-Authentifizierung
* 📤 Dateien hochladen
* 📥 Dateien herunterladen
* 🗑️ Dateien löschen
* ☁️ Speicherung über AWS S3

## 🛠️ Tech Stack

* React + TypeScript
* Vite
* AWS Amplify

## 📦 Installation

```bash
git clone https://github.com/markusschneider2710/FileTransferAWS-Frontend.git
cd FileTransferAWS-Frontend
npm install
```

## ▶️ Projekt starten

```bash
npm run dev
```

Danach im Browser öffnen:
[http://localhost:5173](http://localhost:5173)

## ⚙️ Konfiguration

Die AWS-Konfiguration befindet sich in:

```
src/aws-config.ts
```

👉 Dort müssen deine eigenen AWS-Daten eingetragen werden (z. B. S3, Cognito).

## 📁 Projektstruktur

```
src/
 ├── components/   # UI Komponenten
 ├── services/     # AWS / API Logik
 ├── aws-config.ts # AWS Einstellungen
 └── App.tsx
```
