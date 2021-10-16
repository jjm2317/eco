const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(cors());
app.use(express.json()); // for parsing application/json

console.log(process.argv[2]);

const fs = require('fs');

app.get('/eco', (req, res) => {
  // process.argv[2] : name of txt file
  fs.readFile(process.argv[2], 'utf8', (err, data) => {
    if (err) throw err;
    const arr = data
      .split('\n')
      // exclude weird values like english, empty str
      .filter((row) => !/[A-Za-z]/gi.test(row) && row.length > 5)
      // make str to array of number array
      .map((row) =>
        row
          .replace('\r', '')
          .split(' ')
          .filter((str) => str !== '')
          .map((v) => +v),
      );
    const newestIndex = arr.length - 1;
    res.send(
      JSON.parse(
        JSON.stringify({
          newest: arr[newestIndex],
          prev: arr[newestIndex - 1],
        }),
      ),
    );
  });
});

app.listen('7000', () => {
  console.log('Server is listening on http://localhost:7000');
});
