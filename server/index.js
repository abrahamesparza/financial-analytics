const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const port = 3000;

const db = require('../database/db.js');
const { UserData } = require('../database/index.js');
// const UserData = require('../database/index.js').UserData;

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join('public')));
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).send('OK');
});

app.post('/financial/data', (req, res) => {
  let userData = req.body;
  UserData.create(userData, (err, data) => {
    if (err) res.status(500).send(err);
    else res.status(201).send(data)
  });
});


app.get('/financial/data', (req, res) => {
  let userData = req.body;
  UserData.find((err, data) => {
    if (err) res.status(500).send(err);
    else res.status(200).send(data);
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});