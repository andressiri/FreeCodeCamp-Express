var express = require('express');
var app = express();
var bodyParser = require('body-parser');

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

app.get("/:word/echo", (req, res) => {
  const { word } = req.params;
  res.json({
    echo: word
  });
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/name", (req, res) => {
  var firstName = req.query.first;
  var lastName = req.query.last;

  res.json({
    name: `${firstName} ${lastName}`
  });
});

app.post("/name", (req, res) => {
  var firstName = req.query.first;
  var lastName = req.query.last;

  res.json({
    name: `${firstName} ${lastName}`
  });
});






































 module.exports = app;
