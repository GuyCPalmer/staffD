var express = require("express");

var router = express.Router();

var db = require("../models");

var authController = require('../controllers/auth_controller.js');

// Create all our routes and set up logic within those routes where required.
router.get("/signin", function (req, res) {
    res.render("signin", { layout: 'signinmain.handlebars' });
});

router.get("/signinNew", function (req, res) {
    res.render("signinNew", { layout: 'home.handlebars' });
});

router.get("/signupChoose", function (req, res) {
    res.render("signupChoose", { layout: 'home.handlebars' });
});

router.get("/index", function (req, res) {
    res.render("index", { layout: 'homemain.handlebars' });
});

router.get("/", function (req, res) {
    res.render("home", { layout: 'homemain.handlebars' });
});

router.get("/userProfile", function (req, res, err) {
    var userEmail = 'Duck126@hotmail.com';
    db.talent.findOne({
        where: {
            email: userEmail
        }
    }).then(function (user_data, err) {
        var user_info = {
            user: user_data
        }
        res.render('userProfile', { layout: 'homemain.handlebars', user: user_data });
        console.log(res);
    }).catch(err, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Shouldve recieved your data...");
        }
    });
});

router.get("/home", function (req, res) {
    res.render("home", { layout: 'homemain.handlebars' });
});

router.get("/talentSignup", function (req, res) {
    res.render("talentSignup", { layout: 'signinmain.handlebars' });
});

router.get("/compSignup", function (req, res) {
    res.render("compSignup", { layout: 'signinmain.handlebars' });
});

router.get("/hire", function (req, res, err) {
    db.talent.findAll({}).then(function (talent_data, err) {
        var talent_items = {
            talent: talent_data
        };
        res.render("hire", talent_items);
    }).catch(err, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Shouldve recieved your data...");
        }
    });
});

router.get("/wait", function (req, res) {
    res.render("wait", { layout: 'redirect.handlebars' });
});

router.get("/newEvent", function (req, res) {
    res.render("newEvent", { layout: 'main.handlebars' });
});

router.get("/eventList", function (req, res) {
    res.render("eventList", { layout: 'main.handlebars' });
});

router.get("/contact", function (req, res) {
    res.render("contact", { layout: "homemain.handlebars" });
});

router.get("/dashboard", function (req, res) {
    res.render("dashboard", { layout: "homemain.handlebars" });
});

router.get('')

module.exports = router;