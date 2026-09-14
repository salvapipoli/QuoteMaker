# QuoteMaker

MVP locale per creare, conservare ed esportare preventivi professionali.

## Tre modalità d'uso

1. **File locale:** apri `index.html` in un browser moderno. Non serve installare nulla; il PDF richiede connessione.
2. **Sito web:** pubblica l'intera cartella su GitHub Pages, Netlify o Cloudflare Pages. È un sito statico: non richiede un server applicativo.
3. **App installabile:** dopo la pubblicazione in HTTPS, apri il sito dal telefono e scegli “Aggiungi alla schermata Home” / “Installa app”. Il browser abilita cache offline dell'interfaccia tramite il service worker.

I dati restano esclusivamente nel browser attraverso `localStorage`. Usa **Esporta backup** prima di cancellare i dati del browser o cambiare dispositivo.

## Funzioni incluse

- Preventivi con numerazione progressiva
- Cliente, voci, quantità, sconti, IVA e totali automatici
- Archivio locale, duplicazione ed eliminazione
- Impostazioni dell'attività
- Backup e import JSON
- Esportazione PDF
- Interfaccia mobile
- Lingue: italiano, inglese, spagnolo, francese, tedesco, portoghese, arabo, giapponese e cinese
- Formati internazionali per data e valuta
- Anagrafica clienti riutilizzabile, stato e azione email
- Profilo fiscale configurabile per Paese

## Fiscalità internazionale

L'app consente di definire Paese, valuta, etichetta dell'imposta e aliquota predefinita; il valore è sempre modificabile su ciascuna riga.

Non considera le aliquote come consulenza fiscale e non tenta di dedurre automaticamente norme di tutti i Paesi. Per proporre una tassazione automatica affidabile occorrono un fornitore di dati fiscali aggiornati, una API lato server, regole per prodotto/cliente/transazione e una revisione professionale per i Paesi serviti.

## Nota PDF

Il PDF usa jsPDF e AutoTable da CDN, quindi richiede connessione Internet. Per una distribuzione offline, scaricare le due librerie in `vendor/` e puntare gli script di `index.html` a quei file.
