"use strict"
var mongoose = require('mongoose');

var talentInfoSchema = mongoose.Schema({
    Name: String,
    Address: String,
    City: String,
    State: String,
    ZipCode: String,
    Phone: String,
    Email: String,
    Photo: String,
    DLNumber: String,
    TABCNumber: String,
    Bio: String,
    Rating: String,
});

var Talent = mongoose.model('Company', talentInfoSchema);
module.exports = Talent;