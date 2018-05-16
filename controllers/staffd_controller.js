var express = require("express");

var router = express.Router();

//var db = require("../models/staffd_db.js");




// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    res.render("index");
    console.log(req.body);
    console.log(res);
});

module.exports = router;