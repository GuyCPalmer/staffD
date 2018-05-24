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

//For Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//Static Files
app.use(express.static(__dirname + "/public"));

//Models
var models = require("./models");

// Import routes and give the server access to them.
var routes = require("./controllers/staffd_controller.js");

app.use("/", routes);

//Require API Routes
require("./controllers/api_controller.js")(app);

//Sync Database
models.sequelize.sync().then(function () {
    console.log('Nice! Database looks fine');
}).catch(function (err) {
    console.log(err, "Something went wrong with the Database Update!");
});

var PORT = process.env.PORT || 5000;

app.listen(PORT, function (err) {
    if (!err) {
        console.log("Site is live at 5000");
    } else {
        console.log(err);
    }

});