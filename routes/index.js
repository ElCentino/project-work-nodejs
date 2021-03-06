const database = require('../database');

module.exports.index = (req, res) => {

    database.query("SELECT * FROM book", result => {

        res.render('default', {

            books: result
        });
    })
};

module.exports.details = (req, res) => {

    if(!isNaN(req.query.book_id)) {

        database.query("SELECT * FROM book", result => {

            const index = req.query.book_id;
    
            const data = result.filter(book => book.id == index);

            if(data.length <= 0) {
                res.render('404', {
                    title: "Book Not Found",
                    content: "book"
                })
            }
    
            const shuffleData = arr => {
    
                for(let i = arr.length -1; i > 0; i--) {
        
                    var randomIndex = Math.floor(Math.random() * (i + 1));
                    var tempVal = arr[i];
                    arr[i] = arr[randomIndex];
                    arr[randomIndex] = tempVal;
                }
    
                return arr;
            };
        
            res.render('details', {

                profiles: data[0],
                books: result,
                shuffle : arr => {
        
                    for(let i = arr.length -1; i > 0; i--) {
        
                        var randomIndex = Math.floor(Math.random() * (i + 1));
                        var tempVal = arr[i];
                        arr[i] = arr[randomIndex];
                        arr[randomIndex] = tempVal;
                    }
        
                    return arr;
                },
                filterOddBook: (book) => {
                    return book.id !== data[0].id;
                }
            });
        });
    } else {

        res.render('404', {
            title: "404 File Not Found",
            content: "URL"
        });
    }  
};

module.exports.signup = (req, res) => {

    res.render('signup');
};

module.exports.signupValidation = (req, res, next) => {

    const {
        fullname, 
        email,
        password,
        password2 : cpassword,
        username
    } = req.body;

    database.query("SELECT * FROM users", result => {

        if(password !== cpassword) {
            res.render("signup", {
                message: "Passwords do not match",
                status: "danger"
            });

            return;
        }

        if(email) {

            var atPos = email.indexOf('@');
            var dotPos = email.lastIndexOf('.');

            if((atPos <= 0 || dotPos <= 0) || dotPos - atPos <= 1 || !email.endsWith("com")) {

                res.render("signup", {
                    message: "Invalid Email",
                    status: "danger"
                });
    
                return;
            }
        }

        if(username.indexOf(" ") !== -1) {

            res.render("signup", {
                message: "Invalid Username",
                status: "danger"
            });
            
            return;
        }

        let found = false;

        result.forEach(user => {

            if(user.email === email || user.username == username) {

                res.render("signup", {
                    message: "Email is in use",
                    status: "danger"
                });

            } else {

                if(found === false) {
                    
                    var statement = `
                    INSERT INTO users (fullname, email, password, username) VALUES ('${fullname}', '${email}', '${password}', '${username}')
                    `;

                    database.query(statement, result => {

                        res.render("signup", {
                            message: "You are now Registered, Redirecting....",
                            status: "success",
                            redirect: true
                        });
                    });

                    found = true;
                }
            }
        });
    });
};

module.exports.apiPath = (req, res) => {

    res.render("api", {title: "CE Ghana APIs"});
};

module.exports.E404 = (req, res) => {

    res.render('404', {
        title: "404 File Not Found",
        content: "URL"
    });
};