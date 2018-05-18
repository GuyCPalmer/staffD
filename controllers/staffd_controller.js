var express = require("express");

var router = express.Router();

var db = require("../models/index.js");

// Create all our routes and set up logic within those routes where required.
router.get("/signin", function (req, res) {
    res.render("signin", {layout:'homemain.handlebars'});
});

router.get("/userProfile", function(req, res) {
    res.render("userProfile");
    // console.log(req.body);
    // console.log(res);
});

router.get("/index", function(req, res) {
    res.render("layouts/main");
});

router.get("/", function (req, res) {
    res.render("home", {layout:'homemain.handlebars'});
});

router.get("/talentSignup", function (req, res) {
    res.render("talentSignup", {layout: 'signinmain.handlebars'});
});

router.get("/compSignup", function (req, res) {
    res.render("compSignup", {layout: 'signinmain.handlebars'});
});

router.get("/hire", function (req, res) {
    res.render("hire");
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
    res.render("signupChoose", {layout: 'homemain.handlebars'});
});

module.exports = router;
