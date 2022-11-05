const express = require('express');

require ('dotenv').config();

const app = express();

app.get('/', (req, res) => {
  console.log('--> GET /');
  res.send('Hello World!');
} );

app.get('/printFromEnv', (req, res) => {
  console.log('--> GET /printFromEnv');
  res.send(process.env.TEXT_TO_PRINT);
} );

app.get('/printFromReq', (req, res) => {
  console.log('--> GET /printFromReq');
  const { text } = req.query;
  res.send(text);
} );

app.listen(3000, () => {
  console.log('--> Server listening on port 3000');
} );
