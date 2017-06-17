require('dotenv').config()
const express = require('express')
const app = express()

const pool = require('./lib/db');

app.get('/', function (req, response) {
  pool.query('SELECT * FROM works', function (err, res) {
    if (err) { return console.error('error running query', err); }
    response.send(JSON.stringify(res.rows))
  });
  
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
