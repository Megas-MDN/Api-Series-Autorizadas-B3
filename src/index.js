const express = require('express');
const cors = require('cors');

require('dotenv/config');
const router = require('./routes/index');
const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3001;
app.listen(port, () => console.log('Server ON na porta :: %s', port));
