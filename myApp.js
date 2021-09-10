var express = require('express');
var app = express();

console.log("Hello World");
app.get("/public", express.static(__dirname + "/public"));





































 module.exports = app;
