var app = require('express');
var router = app.Router();

var db = require('../models');

/// gathers all information regarding burger 
router.get('/', function( req, res){
   db.burgers.findAll().then(function(data){
    var hbsObjext = {
        burger: data
    };
    
    res.render('index', hbsObjext);
    });
});

// creates the burger
router.post("/api/burgers",function(req,res ){
    
    db.burgers.create(
        req.body
    )});

// changes the burger 
router.put("/api/burgers/:id", function(req, res){

    var condition = " id =" + req.params.id;

    db.burgers.update( 
        req.body,
        {
        where: {
            id: req.params.id
        }
    });
});// .put

// deeletes the burger 
router.delete("/api/burgers/:id", function(req, res){
    var condition = " id = " + req.params.id;

    console.log( "condition", condition);

    db.burgers.destroy( condition, function(result){
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(202).end();
        }
    } );
});//.delete


module.exports = router;