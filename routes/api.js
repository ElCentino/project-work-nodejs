const database = require('../database');


const renderShiftedResults = (res, result) => {

    result.shift();
    res.json(result);
};

const renderAllResults = (res, result) => res.json(result);

module.exports.userslist = (req, res) => {

    if(req.params.id) {
        
        if(req.params.id == 1) {
            res.end("<h1 style='font-size: 50px'>Aceess Denied</h1>");
        } else {

            database.query(`SELECT id, fullname, username, email FROM users WHERE id = ${req.params.id}`, result => {

                if(result.length <= 0) {

                    res.end(`Sorry user with ID ${req.params.id} does not exist`);
                } else {
                    renderAllResults(res, result);
                }
            });
        }
    } else {

        if(req.query.length) {

            database.query(`SELECT ${req.query.names == "yes" ? "id, fullname" : "id, fullname, username, email"}  FROM users LIMIT ${req.query.length}`, result => {

                renderShiftedResults(res, result);
            });
    
        } else {
    
            database.query("SELECT id, fullname, username, email FROM users", result => {
                
                renderShiftedResults(res, result);
            });
        }
    }  
};

module.exports.library = (req, res) => {

    if(req.params.id) {

        database.query(`SELECT id, title, author, sbn, binding, Price, description FROM book WHERE id = ${req.params.id}`, result => {

            if(result.length <= 0) {
                res.end(`Book with ID of ${req.params.id} does not exist`);
            } else {
                renderAllResults(res, result);
            }
        });
    } else {

        if(req.query.length) {

            database.query(`SELECT id, title, author, sbn, binding, Price, description FROM book LIMIT ${req.query.length}`, result => {

                renderAllResults(res, result);
            });
    
        } else {
    
            database.query("SELECT id, title, author, sbn, binding, Price, description FROM book", result => {
                
                renderAllResults(res, result);
            });
        }
    }
};
