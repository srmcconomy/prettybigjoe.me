var express = require("express");
var app = express();

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.use(express.static('public'));

app.listen(8999, function() {})
