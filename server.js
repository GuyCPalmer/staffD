var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');
var env = require('dotenv').load();


//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

//For Handlebars
//app.set('views', './views');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

/*app.get('/', function (req, res) {
    res.send('Welcome to Passport with Sequelize');
});*/

//Static Files
app.use(express.static(__dirname + "/public"));

//Models
var models = require("./models");

//Routes
// var authRoute = require('./routes/auth.js')(app, passport);

//load passport strategies
require('./config/passport/passport.js')(passport, models.user);

// Import routes and give the server access to them.
var routes = require("./controllers/staffd_controller.js");

app.use("/", routes);
//Sync Database
models.sequelize.sync().then(function () {
    console.log('Nice! Database looks fine');
}).catch(function (err) {
    console.log(err, "Something went wrong with the Database Update!");
});

app.listen(5000, function (err) {
    if (!err) {
        console.log("Site is live at 5000");
    } else {
        console.log(err);
    }

});
