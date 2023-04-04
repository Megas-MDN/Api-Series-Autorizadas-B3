const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  text: {
    type: String,
    require: true,
    unique: true,
  },
  src: {
    type: String,
    require: true,
    unique: true,
  },
  date: {
    require: true,
    type: Date,
  },
});
module.exports = mongoose.model('Source', schema);
