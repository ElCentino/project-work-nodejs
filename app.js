const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
const apiRoutes = require('./routes/api');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', routes.index);
app.get('/details', routes.details);
app.get('/account/signup', routes.signup);
app.post('/account/signup', routes.signupValidation);
app.get('/api', routes.apiPath);
app.get("/api/userslist", apiRoutes.userslist);
app.get("/api/userslist/:id", apiRoutes.userslist);
app.get("/api/library", apiRoutes.library);
app.get("/api/library/:id", apiRoutes.library);
app.get('*', routes.E404);

app.use(cors());

const server = app.listen(process.env.PORT || 3000, () => {

    console.log("Server started on port", server.address().port);
});

exports = app;