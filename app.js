const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const { WorksController } = require('./app/controllers/index');

dotenv.config();

const app = express();

var corsOptions = {
  origin: 'http://localhost:3001'
}

app.use(cors())

app.get('/works', WorksController.index)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
