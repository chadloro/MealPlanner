var express = require('express');
var mysql = require('mysql');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;

var router = express.Router();

var cookieParser = require('cookie-parser');
var session = require('express-session');
var morgan = require('morgan');
var handlebars = require('handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(__dirname + '/js'));

app.use(cookieParser());

router.use(session({
    secret: 'sekritz',
    saveUninitialized: false,
    resave: false,
    cookie: {maxAge: 30000}
}));

//Creates the connection to connect to the meal_planner mySQL database
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'meal_planner'
});

//Checks if connection went through
connection.connect(function(error) {
    if (!!error) {
        console.log('Error');
    }
    else {
        console.log('Connected');
    }
});

//Displays router activity
router.use(function(req, resp, next) {
    console.log(req.method, req.url);
    next();
})

//Render registration page
router.get('/register.html', function(req, resp) {
    resp.sendFile(__dirname + '/view/register.html');
    //resp.cookie('username', 'looksgood');
});

//Submit the registration page form
router.post('/register.html', function(req, resp) {

    var newUser = [
        email = req.body.email,
        password = req.body.password,
        fname = req.body.fname,
        lname = req.body.lname,
        city = req.body.city,
        country = req.body.country
    ];

    if (req.body.newUserIntolerances !== undefined) {
        var newUserIntolerances = req.body.intolerances;
        var emailIntolerances;

        for (var i = 0; i < newUserIntolerances.length; i++) {
            emailIntolerances[i] = [req.body.email, newUserIntolerances[i]];
            connection.query('INSERT INTO User_Intolerances (email, intolerance_name) VALUES (?, ?)', newUserIntolerances[i], (err, result) => {
                if (err) {
                  throw err;
                }
            });
        };
    }
    
    if (req.body.newUserDiet !== undefined) {
        var newUserDiet = req.body.diet;
        var emailDiets;

        for (var i = 0; i < newUserDiet.length; i++) {
            emailDiets[i] = [req.body.email, newUserDiet[i]];
            connection.query('INSERT INTO User_Diet (email, diet_name) VALUES (?, ?)', newUserDiet[i], (err, result) => {
                if (err) {
                    throw err;
                }
            });
        };
        
    }

    connection.query('INSERT INTO User (email, password, fname, lname, city, country) VALUES (?, ?, ?, ?, ?, ?)', newUser, (err, result) => {
        if (err) {
            throw err;
        }

        console.log("Record inserted!");
    });

    resp.sendFile(__dirname + '/view/login.html');
});

//Render login page
router.get('/login.html', function(req, resp) {
    resp.sendFile(__dirname + '/view/login.html');
});

//Submit login form, verify email and password, set up the cookie
router.post('/login.html', function(req, resp) {
    var email = req.body.login_email;
    var password = req.body.login_password;
    console.log("Email: " + email);
    console.log("Password: " + password);

    connection.query('SELECT * FROM User WHERE email = ?', [email], (err, result) => {
      if (err) {
          resp.send({
              "code": 400,
              "failed": "error occurred"
          })
      }
      else {
          //console.log()
          if (result.length > 0) {
              console.log("database password: " + result[0].password);
              console.log("submitted password: " + password);
              if (result[0].password == password) {
                  var sessionData = req.session;
                  sessionData.userId = result[0].id;
                  sessionData.fname = result[0].fname;
                  sessionData.email = result[0].email;

                  console.log(sessionData);

                  resp.sendFile(__dirname + "/view/login-success.html");            
              }
              else {
                  resp.send({
                      "code": 204,
                      "success": "Email and password don't match"
                  });
              }
          }
          else {
              resp.send({
                  "code": 204,
                  "success": "email doesn't exist"
              });
          }
      }  

    });
});

//Render food planning form page
router.get('/food-planner-form.html', function(req, resp, next) {
    resp.sendFile(__dirname + '/view/food-planner-form.html');
});

app.listen(port, function() {
    console.log("Live at Port 8080!")
});

app.use('/', router);
