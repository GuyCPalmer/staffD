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

//app.post('api/events', function (req, res) {
  //db.events.create({
      //eventOwner: req.body.eventOwner,
      //eventDateTimeStart: req.body.eventstart,
      //eventDateTimeEnd: req.body.eventend,
      //locationAddress: req.body.address,
      //locationSpecialInst: req.body.instructions,
      //onsiteContact: req.body.contact
    //}).then(function (dbComp) {
        //res.json(dbComp);
    //});
//})



 //get talent to display on the hire page, run get request based on "staff my event: type"
  app.get("/api/talent/jobBar/:jobBar", function(req, res) {
    db.talent.findAll({
        where: {
          jobBar: req.params.true
        }
    })
      .then(function(dbTalent) {
          res.json(dbTalent);
      });
  });
    
  app.get("/api/talent/jobServer/:jobServer", function(req, res) {
    db.talent.findAll({
        where: {
          jobBar: req.params.true
        }
    })
      .then(function(dbTalent) {
          res.json(dbTalent);
      });
    });
    
  app.get("/api/talent/jobSales/:jobSales", function(req, res) {
    db.talent.findAll({
      where: {
        jobBar: 1
      }
    })
      .then(function(dbTalent) {
        res.json(dbTalent);
      });
    });
    
  app.get("/api/talent/jobModel/:jobModel", function(req, res) {
    db.talent.findAll({
      where: {
          jobBar: req.params.true
        }
      })
        .then(function(dbTalent) {
          res.json(dbTalent);
        });
    });
    
  app.get("/api/talent/jobSecurity/:jobSecurity", function(req, res) {
    db.talent.findAll({
        where: {
          jobBar: req.params.true
        }
      })
        .then(function(dbTalent) {
          res.json(dbTalent);
        });
    });

//update and delete
   // app.get("api/users/:userName", function(req, res) {
     // db.users.findAll({
       // where: {
        //userName: 2  //email: currentUser
    //}
  //});
// SELECT * FROM post WHERE authorId = 2

//app.get('api/users/')
//Post.destroy({
  //where: {
    //status: 'inactive' //email: currentUser
  //}
//});
// DELETE FROM post WHERE status = 'inactive';





//Post.update({
  //updatedAt: null,
//}, {
  //where: {
    //deletedAt: {
      //[Op.ne]: null
    //}
  //}
//});
// UPDATE post SET updatedAt = null WHERE deletedAt NOT NULL;




};