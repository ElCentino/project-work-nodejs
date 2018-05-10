const mysql = require('mysql');

const conn = mysql.createConnection({
    
    host: "mysql7002.site4now.net",
    user: "lqpgny8x_ceghana",
    password: "savour2how.roll",
    database: "lqpgny8x_project"
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