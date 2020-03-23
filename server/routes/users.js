var express = require('express');
var router = express.Router();
var sql = require('./../db.js');


/* GET users listing. */
router.get('/', function(req, res, next) {


	let first_query = async() => {
		let query_string = `SELECT * FROM user
							INNER JOIN affiliation ON
							user.userID=affiliation.userID`;
		let args = [];

		return await sql.query(query_string, args);
	}

	first_query().then((data) => {
		res.send({
			status: "ok",
			rows: data
		})
	}).catch(e => {
		console.error(e);
		res.send({
			status: "fail"
		})
	})


});

//Get specific user by thier user_id
router.get('/id/:target', function(req, res, next) {
	var claimedBy = req.params.target;

	let query = async() => {
		let query_string = 'SELECT * FROM user where user.userID = ?';
		let args = [claimedBy];

		return await sql.query(query_string, args);
	}


	query().then(data => {
		res.send({
			status: "ok",
			rows: data
		})
	}).catch(e => {
		console.error(e);
		res.status(400);
		res.send({ status: "fail" });
	});

});





// 	//Claim the user 
// router.post('/', function(req, res, next) {
// 		let userID = req.body.userID
// 		let claimedBy = req.body.claimedBy

// 		// console.log(req.body)

// 		let query = 
// 		`UPDATE user
// 		SET claimedBy="${claimedBy}", claimed=1
// 		WHERE userID=${userID}
// 		`
// 		console.log(query)
// 		sql.query(query, function (err, rows, fields) {
// 			  if (err) throw err
// 			  res.send({
// 					  status: 200,
// 					  body: rows
// 			  });
// 			})

// 		});

module.exports = router;
