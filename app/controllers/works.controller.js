const pool = require('../../lib/db');

module.exports = {
  index: function (req, response) {
    pool.query('SELECT * FROM works LIMIT 50', function (err, res) {
      if (err) { return console.error('error running query', err); }
      response.send(JSON.stringify(res.rows))
    });
  }
}

