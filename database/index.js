const mysql = require('mysql');

const conn = mysql.createConnection({ 
    host: 'db4free.net',
    port: 3306,
    user: 'elcentino',
    password: 'rock.roll',
    database: 'nodetestdb'
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