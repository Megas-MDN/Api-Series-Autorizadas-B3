const mongoose = require('mongoose');
require('dotenv/config');

const startDatabase = async () => {
  try {
    const url = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@cluster0.6ipgub7.mongodb.net/api-fin?retryWrites=true&w=majority`;
    await mongoose.connect(url);
    console.log('Conectado com sucesso no banco de dados;');
  } catch (error) {
    console.log('Não foi possível conectar no banco de dados');
    console.log(error.message);
    throw error;
  }
};

module.exports = startDatabase;
