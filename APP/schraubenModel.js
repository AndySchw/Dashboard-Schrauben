

const mongoose = require('mongoose');

const meinSchema = new mongoose.Schema({
  "Hersteller": String,
  "Schraube": String,
  "Preis": Number,
  "VerkaufteMenge": Number,
  "Datum": Date
});

const MeinModel = mongoose.model('MeinModel', meinSchema);

module.exports = MeinModel;
