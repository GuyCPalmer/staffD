"use strict"
var express = require('express');
var app = express();
var path = require('path');


//middle ware to define static file simages
app.use(express.static('public'))

app.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(3000, function(){
    console.log('Web-server is lisntening on port 3000');
})
