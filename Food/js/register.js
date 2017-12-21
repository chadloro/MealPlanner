var express = require('express');
var mysql = require('mysql');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));

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

app.get('/', function(req, resp) {
    resp.sendFile('/Users/chadloro/Desktop/MealPlanner/view/register.html');
    console.log(__dirname);
    
});

app.post('/data', function(req, resp) {
    var email = req.body.email;

    console.log(email);

    //connection.query("INSERT INTO Diet ")
});

//connection.end();

app.listen(1337);