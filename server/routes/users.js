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

router.post('/', function(req, res, next) {
		let userID = req.body.userID
		let claimedBy = req.body.claimedBy

		console.log(req.body)

		let query = 
		`UPDATE user
		SET claimedBy="${claimedBy}", claimed=1
		WHERE userID=${userID}
		`
		console.log(query)
		sql.query(query, function (err, rows, fields) {
			  if (err) throw err
			  res.send({
					  status: 200,
					  body: rows
			  });
			})
	
		});

module.exports = router;
