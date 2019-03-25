var express = require('express');
var router = express.Router();
var sql = require('./../db.js');


/* GET users listing. */
router.get('/', function(req, res, next) {
	let query = "SELECT user.userID,email,firstName,lastName,researchInterests,profilePicture, ShibbolethLogin, departmentID FROM user, affiliation WHERE user.userID = affiliation.userID"
	sql.query(query, function (err, rows, fields) {
		  if (err) throw err
		  res.send({
		  		status: 200,
		  		body: rows
		  });
		})

	});

module.exports = router;
