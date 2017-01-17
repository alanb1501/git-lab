var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send(new Date());
});

app.listen(3000, function () {
  console.log('Test app listening on port 3000!')
})