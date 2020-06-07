var express = require('express');
var router = express.Router();
var sql = require('./../db.js');


/* GET users listing. */
router.get('/', function(req, res, next) {


	let first_query = async() => {
		let query_string = `SELECT user.userID, user.email, user.firstName, user.lastName, user.researchInterests, user.profilePicture, user.ShibbolethLogin, affiliation.departmentID
							FROM user
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

//Get specific user by thier targetID
router.get('/id', function(req, res, next) {
	var claimedBy = req.query.id;

	let query = async() => {
		let query_string = `SELECT * FROM user 
		WHERE user.userID = (
			SELECT targetID_to_userID.userID
			FROM targetID_to_userID
			WHERE targetID_to_userID.targetID=?
		)`;
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
router.post('/update', function(req, res, next) {
	let userID = req.body.userID

	var sets = {
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		researchInterests: req.body.researchInterests
	}
	// console.log(req.body)
	let query = async() => {
		let query_string = `UPDATE user SET ? WHERE userID=?`;
		let args = [sets, userID];
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

module.exports = router;
