var express = require("express");
// first step
var app = express();


const one = (req, res, next) => {
  console.log('>> one');
  next();
  console.log('<< one');
}

const two = (req, res, next) => {
  console.log('>> two');
  next(); 
  console.log('<< two');
}

const three = (req, res, next) => {
  console.log('>> three');
  next();
  console.log('<< three');
}

app.use(one);
app.use(two);
app.use(three);

// second step
app.get("/", function(req, res) {
  res.send("Hello world!");
});

// third step
app.listen(3003);