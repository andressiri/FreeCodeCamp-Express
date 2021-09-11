var express = require('express');
var app = express();

app.use("/public", express.static(__dirname + "/public"));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

console.log("Hello World");
app.get("/", (req, res) => {
  //res.send("Hello Express");
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req, res) => {
  let response = "Hello json";
  if (process.env.MESSAGE_STYLE === "uppercase") {    
    response = response.toUpperCase();
  };
  res.json({
    message: response
  });
});

app.get("/now", (req, res, next) => {
  req.time = new Date().toString();
  next();
},
(req, res) => {
  res.send({
    time: req.time
  });
});






































 module.exports = app;
