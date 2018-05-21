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

require("./controllers/api_controller.js")(app);

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
<<<<<<< HEAD





// const express = require('express'),
//     app = express(),
//     passport = require('passport'),
//     auth = require('./routes/auth'),
//     cookieParser = require('cookie-parser'),
//     cookieSession = require('cookie-session');

// auth(passport);
// app.use(passport.initialize());

// app.use(cookieSession({
//     name: 'session',
//     keys: ['SECRECT KEY'],
//     maxAge: 24 * 60 * 60 * 1000
// }));
// app.use(cookieParser());

// app.get('/', (req, res) => {
//     if (req.session.token) {
//         //if logged in
//         res.cookie('token', req.session.token);
//         res.json({
//             status: 'session cookie set'
//         });
//     } else {
//         //if not logged in
//         res.cookie('token', '');
//         res.json({
//             status: 'session cookie not set'
//         });
//     }
// });

// app.get('/logout', (req, res) => {
//     req.logout();
//     req.session = null;
//     res.redirect('/');
// });

// app.get('/auth/google', passport.authenticate('google', {
//     scope: ['https://www.googleapis.com/auth/userinfo.profile']
// }));

// app.get('/auth/google/callback',
//     passport.authenticate('google', {
//         failureRedirect: '/'
//     }),
//     (req, res) => {
//         console.log(req.user.token);
//         req.session.token = req.user.token;
//         res.redirect('/');
//     }
// );

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });
=======
>>>>>>> 8e94677232ffc13309626feaee76ec416b55a321
