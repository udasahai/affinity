var mysql = require('mysql');

//local mysql db connection
var pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'rawdata'
});

// var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'kumapaw',
//     password : 'Anav@ushare',
//     database : 'rawdata'
// });

const db = {

  query(sql, args = []) {
    // console.log("Executing Query : " + mysql.format(sql, args));
    return new Promise((resolve, reject) => {
      pool.query(sql, args, (err, result) => {
        if (err)
          return reject(err);
        resolve(result);
      });
    });
  }

};

module.exports = db;
