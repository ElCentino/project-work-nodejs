const mysql = require('mysql');

const conn = mysql.createConnection({ 
    host: 'db4free.net',
    port: 3306,
    user: 'elcentino',
    password: 'rock.roll',
    database: 'nodetestdb'
});

// const conn = mysql.createConnection({ 
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: 'root',
//     database: 'elcentino'
// });

try {

    conn.connect(err => {
    
        if(err) throw err;
    
        console.log("Connection to database Successfull");
    });

} catch(error) {
    
    console.log("Could not connect to database : " + error);
}

module.exports.query = function(statement, callback, arr) {

    if(arr) {

        conn.query(statement, [...arr], (err, result, fields) => {

            if(err) throw err;
    
            if(callback) return callback(result);
        });

    } else {

        conn.query(statement, (err, result, fields) => {

            if(err) throw err;
    
            if(callback) return callback(result, fields);
        });
    }
};