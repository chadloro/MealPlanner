var express = require('express');
var mysql = require('mysql');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;

var router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('js'));


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'meal_planner'
});

connection.connect(function(error) {
    if (!!error) {
        console.log('Error');
    }
    else {
        console.log('Connected');
    }
});

//module.exports = express;
//module.exports = mysql;
//module.exports = app;
//module.exports = bodyParser;
//module.exports = connection;
app.get('/sample', function(req, resp) {
    res.send('This is a sample!');
})

router.use(function(req, resp, next) {
    console.log(req.method, req.url);
    next();
})

router.get('/register', function(req, resp) {
    resp.sendFile('/Users/chadloro/Desktop/MealPlanner/view/register.html');
});

router.post('/register', function(req, resp) {

    //console.log(email);

    const newUser = {
        email: req.body.email,
        password: req.body.password,
        fname: req.body.fname,
        lname: req.body.lname,
        city: req.body.city,
        country: req.body.country
    }

    console.log(newUser);

    //console.log(insertQuery);
    connection.query('INSERT INTO User SET ?', newUser, (err, result) => {
        if (err) {
            throw err;
        }

        console.log("Record inserted!");
    });

    connection.query()

   //resp.send(email);
});

router.get('/login', function(req, resp) {
    //resp.sendFile('/Users/chadloro/Desktop/MealPlanner/view/log.html');
    resp.send("Made it to the login page!");   
});
  
app.listen(port, function() {
    console.log("Live at Port 8080!")
});

app.use('/', router);

/*
app.post('/register', function(req, resp) {
    var email = req.body.email;

    console.log(email);
});

app.post('/login', function(req, resp) {
    var email = req.body.email;

    console.log(email);
});

connection.end();

app.listen(1337);
*/