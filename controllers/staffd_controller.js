var express = require("express");

var router = express.Router();

var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/signin", function (req, res) {
    res.render("signin", { layout: 'homemain.handlebars' });
});

router.get("/userProfile", function (req, res) {
    res.render("userProfile");
});

<<<<<<< HEAD
router.get("/index", function (req, res) {
=======
router.get("/index", function(req, res) {
>>>>>>> 4e14ed2f9ce15b97dac6abb3afc18411cdb0aef8
    res.render("index");
});

router.get("/", function (req, res) {
    res.render("home", { layout: 'homemain.handlebars' });
});

router.get("/talentSignup", function (req, res) {
    res.render("talentSignup", { layout: 'signinmain.handlebars' });
});

router.get("/compSignup", function (req, res) {
    res.render("compSignup", { layout: 'signinmain.handlebars' });
});

router.get("/hire", function (req, res, err) {
    db.talent.findAll({}).then(function (talentData, err) {
        res.render("hire", talentData);
        console.log(talentData, "this is the talent data");
    }).catch(err, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Shouldve Got you data...");
        }
    });
        
    
    
});

router.get("/newEvent", function (req, res) {
    res.render("newEvent");
});

router.get("/eventList", function (req, res) {
    res.render("eventList");
});

router.get("/contact", function (req, res) {
    res.render("contact");
});

router.get("/signupChoose", function (req, res) {
    res.render("signupChoose", { layout: 'homemain.handlebars' });
});

module.exports = router;
