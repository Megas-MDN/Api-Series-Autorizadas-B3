const mongoose = require('mongoose');

const schema = mongoose.Schema({
  header: {
    type: String,
    require: true,
    unique: true,
  },
});

module.exports = mongoose.model('Header', schema);
