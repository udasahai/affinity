var express = require('express');
var router = express.Router();
var sql = require('./../db.js');


/* GET users listing. */
router.get('/', function(req, res, next) {
	sql.query('select * from research_interest', function (err, rows, fields) {
		  if (err) throw err
		  res.send({
		  		status: 200,
		  		body: rows
		  });
		})

	});

module.exports = router;