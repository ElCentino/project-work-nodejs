const mysql = require('mysql');

module.exports = {

    connect: function(callback) {
        
        const conn = mysql.createConnection({ 
            host: 'db4free.net',
            port: 3306,
            user: 'elcentino',
            password: 'rock.roll',
            database: 'nodetestdb'
        });
    
        conn.connect(function(err) {

            if(err) throw err;

            callback("Connected to database");
        });

        conn.end();
    }
};