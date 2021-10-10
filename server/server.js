const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(cors());
app.use(express.json()); // for parsing application/json

console.log(process.argv[2]);

const fs = require('fs');
const filename = process.argv[2];
fs.readFile('./file.txt', 'utf8', function (err, data) {
  if (err) throw err;
  console.log('OK: ' + filename);
  console.log(data);
});

app.get('/eco', (req, res) => {
  res.send();
});

app.listen('7000', () => {
  console.log('Server is listening on http://localhost:7000');
});
