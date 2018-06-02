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
    
            database.query(`SELECT ${req.query.names == "yes" ? "id, fullname" : "id, fullname, username, email"} FROM users`, result => {
                
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

        database.query("SELECT * FROM book", colums => {

            database.query(`SELECT id, title, author, sbn, binding, Price, description FROM book WHERE ${typeof req.query.author != 'undefined' ? "author = " : "id > "}  '${typeof req.query.author != 'undefined' ? req.query.author : "-1"}'ORDER BY ${req.query.col || "id"} ${req.query.order == "desc" ? "DESC" : "ASC"} LIMIT ${req.query.length || colums.length}`, result => {
                
                renderAllResults(res, result);
            });
        });
    }
};

module.exports.addBook = (req, res) => {

    const { title, image, author, sbn, binding, price, description } = req.query;

    if(title && author && sbn && binding && price && description) {

        database.query(`INSERT INTO book(title, image, author, sbn, binding, Price, description) VALUES ("${title}", "${image}", "${author}", "${sbn}", "${binding}", "${price}", "${description}")`, result => {
            console.log(result);
        });

        res.end("Book Added");

    } else {

        res.end("Please provide all the details");
    }
};

module.exports.deleteBook = (req, res) => {

    const { id } = req.params;

    if(id) {

        database.query(`DELETE FROM book where id=${id}`, result => {
            
            if(result.affectedRows > 0) {

                res.end("Book was Deleted");
            } else {

                res.end("Book was not found, no changes made");
            }
        });

    } else {

        res.end("Please enter a valid book id");
    }
};

module.exports.updateBook = (req, res) => {

    
};
