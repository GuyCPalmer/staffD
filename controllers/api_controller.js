var express = require("express");

var app = express.Router();

var db = require("../models");

module.exports = function(app) {

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

    app.post('/api/talent', function(req, res){
        db.talent.create({
            talentName: req.body.talentName,
            phone: req.body.phone,
            email: req.body.email,
            talentAddress: req.body.talentAddress,
            socSec: req.body.socSec,
            driverLic: req.body.driverLic,
            driverLicNum: req.body.driverLicNum,
            tabc: req.body.tabc,
            tabcNum: req.body.tabcNum,
            jobBar: req.body.jobBar,
            jobServer: req.body.jobServer,
            jobSales: req.body.jobSales,
            jobModel: req.body.jobModal,
            jobSecurity: req.body.jobSecurity,
            bio: req.body.bio

        }).then(function(dbTalent){
            res.json(dbTalent);
        });
    });

    app.post('/api/event_owners', function(req,res){
        db.event_owners.create({
            eventOwner: req.body.eventOwner,
            purchasingContact: req.body.purchasing,
            phone: req.body.phone,
            email: req.body.email,
            coordinator: req.body.coordinator,
            ownerAddress: req.body.ownerAddress
        }).then(function(dbComp){
            res.json(dbComp);
        });
    });
    
};