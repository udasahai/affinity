
var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'rawdata'
});

// var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'kumapaw',
//     password : 'Anav@ushare',
//     database : 'rawdata'
// });

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;