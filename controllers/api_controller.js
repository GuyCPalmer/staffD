var express = require("express");

var app = express.Router();

var db = require("../models");

module.exports = function (app) {

  app.get("/api/events/", function (req, res) {
    console.log("apiControl", req.body);
    db.events.findAll({})
      .then(function (eventData, err) {
        if (err) {
          console.log(err, "Couldn't get Event Data");
        }
        res.json(eventData);
      });
  });

  app.post("/api/events", function (req, res) {
    db.events.create({
      eventOwner: req.body.eventOwner,
      eventDateTimeStart: req.body.eventDateTimeStart,
      eventDateTimeEnd: req.body.eventDateTimeEnd,
      locationAddress: req.body.locationAddress,
      locationSpecialInst: req.body.locationSpecialInst,
      onsiteContact: req.body.onsiteContact
    }).then(function (dbevents) {
      res.json(dbevents);
    });
  });

  app.post('/api/talent', function (req, res) {
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
      jobModel: req.body.jobModel,
      jobSecurity: req.body.jobSecurity,
      bio: req.body.bio

    }).then(function (dbTalent) {
      res.json(dbTalent);
    });
  });

  app.post('/api/event_owners', function (req, res) {
    db.event_owners.create({
      eventOwner: req.body.eventOwner,
      purchasingContact: req.body.purchasing,
      phone: req.body.phone,
      email: req.body.email,
      coordinator: req.body.coordinator,
      ownerAddress: req.body.ownerAddress
    }).then(function (dbComp) {
      res.json(dbComp);
    });
  });

  //get talent to display on the hire page, run get request based on "staff my event: type"
  /*app.get("/api/talent/jobBar", function (req, res) {
    db.talent.findAll({
      where: {
        jobBar: 1
      }
    })
      .then(function (dbTalent) {
        res.json(dbTalent);
      });
  });*/

  app.get("/api/talent/jobServer", function (req, res) {
    db.talent.findAll({
      where: {
        jobBar: 1
      }
    })
      .then(function (dbTalent) {

        res.json(dbTalent);
      });
  });

  app.get("/api/talent/:jobSales", function (req, res) {
    db.talent.findAll({
      where: {
        jobServer: 1
      }
  })
    .then(function(dbTalent) {
        res.json(dbTalent);
    });
  });
  
 app.get("/api/talent/:jobBar", function(req, res) {
    db.talent.findAll({
        where: {
          jobBar: 1
        }
    })
      .then(function(dbTalent) {
          res.json(dbTalent);
      });
  });
    
  app.get("/api/talent/:jobModel", function(req, res) {
    db.talent.findAll({
      where: {
          jobModel: 1
        }
      })
        .then(function(dbTalent) {
          res.json(dbTalent);
        });
    });
    
  app.get("/api/talent:jobSecurity", function(req, res) {
    db.talent.findAll({
        where: {
          jobSecurity: 1
        }
      })
        .then(function(dbTalent) {
          res.json(dbTalent);
        });
    });


  app.get("/talent/:email", function (req, res) {
    console.log(req.body.email, "Backend Request ");
    //console.log(currentEmail);
    db.talent.findOne({
      where: {
        email: req.params.email
      }
    })
      .then(function (userData) {
        console.log(userData);
        res.json(userData);
      });
  });

  app.get("/owners/:email", function (req, res) {
    db.event_owners.findOne({
      where: {
        email: req.params.email
      }
    })
      .then(function (ownerData) {
        res.json(ownerData);
      });
  });

};