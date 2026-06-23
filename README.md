# 💰 Finanzen & Vermögen

Private Finanz-App als PWA — Konten, Aktien & ETFs, Hausbau-Gewerke, Einkommen,
Kredite, Steuer und Vermögens-Prognose. Synchron auf allen Geräten über Supabase.

**Live:** https://steffenah.github.io/Finanzen/

## Features

- 🏦 **Konten** mit Bank-Liste und Zinssatz-Vorgaben, Massen-Import per Copy-Paste
- 📈 **Aktien & ETFs** mit automatischem Kursabruf (Alpha Vantage) und Sparplan
- 💵 **Dividenden** erfassen → 10-Jahres-Durchschnitt als Prognose
- 💶 **Einkommen** Brutto → Netto-Schätzung 2025 (Steuerklassen, Kinder, KV)
- 💳 **Verbindlichkeiten** mit Startdatum, Annuität, „abbezahlt"-Datum
- 💸 **Fixe Ausgaben** mit optionalem Enddatum (Krippe, Versicherung …)
- 🏗️ **Hausbau** mit Gewerke-Liste, Auftragswert, Bezahlung-Tracking
- 🧾 **Steuer** Abgeltungsteuer + Soli + Kirchensteuer
- 📑 **Anlage-KAP-Hilfe** für die Steuererklärung
- 📊 **Vermögens-Verlauf** mit monatlichen Auto-Snapshots + SVG-Chart
- 📅 **Slider-Prognose** für die nächsten 1,5 Jahre
- 🥧 **Pie-Chart** der Vermögensaufteilung
- 🛡️ **Notgroschen-Indikator** nach Abzug offener Bauausgaben
- 💾 **Backup** als JSON-Datei (Export & Restore)
- 🔢 **PIN-Schnellzugriff** auf dem Handy
- 📲 **Setup-Link/QR** für neue Geräte ohne Tippen
- 📱 Als **App installierbar** (PWA, offline-fähig)

## Setup

Siehe [ANLEITUNG.txt](ANLEITUNG.txt) für die einmalige Einrichtung (Supabase + erste Anmeldung).

## Geräte-Sync

`start.ps1` doppelklicken → holt Updates vom GitHub-Repo, lädt lokale Änderungen automatisch hoch.

## Tech

Single-File HTML/CSS/JS + Supabase als Backend + Service Worker für Offline.
Keine Build-Step, kein Framework — einfach `index.html` öffnen.
