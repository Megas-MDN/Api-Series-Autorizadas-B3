const express = require('express');
const cors = require('cors');
const startDatabase = require('./database/connect');

require('dotenv/config');

const router = require('./routes/index');

const app = express();
app.use(express.json());
app.use(cors());

app.use(router);

const port = process.env.PORT || 3001;

startDatabase()
  .then(() => {
    app.listen(port, () => console.log('Server ON na porta :: %s', port));
  })
  .catch((err) => {
    console.log('Api down por falha de conexão no banco de dados.');
    console.log(err.code);
  });
