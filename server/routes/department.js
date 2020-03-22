var express = require('express');
var router = express.Router();
var sql = require('./../db.js');


/* GET users listing. */
router.get('/', function(req, res, next) {

	let query = async() => {
		let query_string = 'SELECT * FROM department';
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


router.get('/:id', function(req, res, next) {

	let query = async() => {
		let query_string = 'SELECT * FROM department WHERE departmentID=?';
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
