const mysql = require('mysql');

const conn = mysql.createConnection({
    
    host: "localhost",
    user: "root",
    password: "root",
    database: "project"
});

conn.connect(err => {
    
    if(err) throw err;
});

module.exports.query = function(sql, callback) {
    
    conn.query(sql, function (err, result, fields) {

        if (err) throw err;

        callback(result);
    });
};