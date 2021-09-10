var express = require('express');
var app = express();

app.use("/public", express.static(__dirname + "/public"));

console.log("Hello World");
app.get("/", (req, res) => {
  //res.send("Hello Express");
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req, res) => {
  res.json({
    message: "Hello json"
  });
});






































 module.exports = app;
