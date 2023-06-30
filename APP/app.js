// Importieren der Module
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const MeinModel = require('./schraubenModel');

const port = 3000;

// Initialisieren der Express-App
const app = express();

// Verbindung zur MongoDB
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_CLUSTER = process.env.DB_CLUSTER;
const DB_NAME = process.env.DB_NAME;

const connStr = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_CLUSTER}/${DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(connStr, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log('MongoDB verbunden...');
})
.catch(err => console.log(err));

// Setzen von Pug als View-Engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './public/views'));

// Routen
app.get('/', async (req, res) => {
  const daten = await MeinModel.find();
  res.render('index', { daten });
});

// Starten des Servers
app.listen(port, () => console.log(`Server läuft auf Port ${port}`));
