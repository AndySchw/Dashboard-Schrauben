// Importieren der Module
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const MeinModel = require('./schraubenModel');

const port = 3000;

// Initialisieren der Express-App
const app = express();

app.use(express.static('public'));

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

app.get('/impressum', async (req, res) => {
  res.render('impressum');
});


app.get('/wuerth', async (req, res) => {
  try {
    const daten = await MeinModel.aggregate([
      { $match: { Hersteller: 'Wuerth' } },
      { $group: { _id: '$Schraube', totalMenge: { $sum: '$VerkaufteMenge' } } },
    ]);

    const alleDaten = await MeinModel.find({ Hersteller: 'Wuerth' });

    console.log(daten);
    console.log(alleDaten);

    res.render('wuerth', { daten: JSON.stringify(daten), alleDaten: JSON.stringify(alleDaten) });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});



app.get('/heco', async (req, res) => {
  try {
    const daten = await MeinModel.aggregate([
      { $match: { Hersteller: 'HECO' } },
      { $group: { _id: '$Schraube', totalMenge: { $sum: '$VerkaufteMenge' } } },
    ]);

    const alleDaten = await MeinModel.find({ Hersteller: 'HECO' });

    console.log(daten);
    console.log(alleDaten);

    res.render('heco', { daten: JSON.stringify(daten), alleDaten: JSON.stringify(alleDaten) });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

app.get('/swg', async (req, res) => {
  try {
    const daten = await MeinModel.aggregate([
      { $match: { Hersteller: 'SWG' } },
      { $group: { _id: '$Schraube', totalMenge: { $sum: '$VerkaufteMenge' } } },
    ]);

    const alleDaten = await MeinModel.find({ Hersteller: 'SWG' });

    console.log(daten);
    console.log(alleDaten);

    res.render('swg', { daten: JSON.stringify(daten), alleDaten: JSON.stringify(alleDaten) });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});


// Starten des Servers
app.listen(port, () => console.log(`Server läuft auf Port ${port}`));
