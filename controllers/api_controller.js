var express = require("express");

var router = express.Router();

var db = require("../models");

module.exports = function (app) {

    app.get("/api/events/", function (req, res) {
        console.log("apiControl", req.body);
        db.events.findAll({})
            .then(function (eventData, err) {
                if(err){
                    console.log(err, "Couldn't get Event Data");
                }
                res.json(eventData);
            });
    });


};