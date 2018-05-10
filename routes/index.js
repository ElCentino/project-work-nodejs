const db = require('../resourses/books.json');

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
            title: "404 File Not Found"
        });
    }  
};

module.exports.E404 = (req, res) => {

    res.render('404', {
        title: "404 File Not Found"
    });
}