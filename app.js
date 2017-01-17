var express = require('express');
var request = require('supertest');
var app = express();

app.get('/', function (req, res) {
  res.send(new Date());
});

app.get('/convert/:currency/:value', function (req, res) {
    //hint switch on req.params.currency
    var currency = req.params.currency;
    var value = req.params.value;
    var result = 0;
    if(currency=="INR")
    {
      result = value/68.10;
    }
    res.send({result});
});

app.listen(3000, function () {
  console.log('Test app listening on port 3000!')
});



//tests

request(app)
  .get('/')
  .expect('Content-Type', /json/)
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
});
