require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()

var corsOptions = {
  origin: 'http://localhost:3001'
}

app.use(cors())

const pool = require('./lib/db');

app.get('/works', function (req, response) {
  pool.query('SELECT * FROM works LIMIT 50', function (err, res) {
    if (err) { return console.error('error running query', err); }
    response.send(JSON.stringify(res.rows))
  });
  
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
