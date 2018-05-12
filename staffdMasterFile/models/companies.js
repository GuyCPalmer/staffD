"use strict"
var mongoose = require('mongoose');

var companyInfoSchema = mongoose.Schema({
    CompanyName: String,
    Address: String,
    City: String,
    State: String,
    ZipCode: String,
    Title: String,
    Contact: String,
    Phone: String,
    Email: String,
    Photo: String
});

var Company = mongoose.model('Company', companyInfoSchema);
module.exports = Company;