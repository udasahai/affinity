var express = require('express');
var router = express.Router();
var sql = require('./../db.js');

router.get('/', function(req, res, next) {

	// var userID = req.query.userid;

	let query = async() => {
		let query_string = `SELECT * FROM publications`;
		let args = [];

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



router.get('/user', function(req, res, next) {

	var userID = req.query.userid;

	let query = async() => {
		let query_string = `SELECT * FROM publications  
		WHERE userID = ?`;
		let args = [userID];

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
