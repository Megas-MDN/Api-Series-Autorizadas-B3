const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  tipoDaSerie: Number,
  ativPrincipal: String,
  tipoAtivoPrincipal: String,
  labelDerivativo: String,
  ticket: {
    type: String,
    unique: true,
  },
  tipoDerivativo: String,
  strike: Number,
  vencimento: Date,
});

module.exports = mongoose.model('Series', schema);
