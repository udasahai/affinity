var express = require('express');
var router = express.Router();
var sql = require('./../db.js');


/* GET users listing. */
router.get('/', function(req, res, next) {
	let query = async() => {
		let query_string = 'SELECT * FROM research_interest';
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


router.get('/target/:id', function(req, res, next) {

	let query = async() => {
		let query_string = 'SELECT * FROM research_interest WHERE research_interestID=?';
		let args = [req.params.id];

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


router.get('/user/:id', function(req, res, next) {

	let query = async() => {
		let query_string = 'SELECT * FROM research_interest WHERE userID=?';
		let args = [req.params.id];

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
