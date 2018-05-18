var express = require("express");

var router = express.Router();

var db = require("../models/index.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    res.render("signin");
});

router.get("/userProfile", function(req, res) {
    res.render("userProfile");
<<<<<<< HEAD
});

router.get("/index", function(req, res) {
    res.render("index");
=======
    // console.log(req.body);
    // console.log(res);
});

router.get("/index", function(req, res) {
    res.render("layouts/main");
>>>>>>> f9cf6b2a530d6456643ada6d5b3ecf3c02027ccc
});

router.get("/home", function (req, res) {
    res.render("home");
});

router.get("/talentSignup", function (req, res) {
    res.render("talentSignup");
});

router.get("/compSignup", function (req, res) {
    res.render("compSignup");
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

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> f9cf6b2a530d6456643ada6d5b3ecf3c02027ccc
