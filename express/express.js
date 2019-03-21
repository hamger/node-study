var express = require("express");
var path = require("path");

var app = express();

// 指定模板文件所在目录
app.set("views", path.resolve("express", "views"));
// 指定要使用的模板引擎
app.set("view engine", "pug");
// app.engine('.html', require('pug').__express)
// app.set('view engine', 'html')

app.get("/", function(req, res) {
  res.render("home", { title: "Hey", message: "Hello there!" });
});

app.listen(3003);
console.log("应用启动成功，localhost:3003");
