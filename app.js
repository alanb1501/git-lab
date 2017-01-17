var express = require('express');
var request = require('supertest');
var app = express();

app.get('/', function (req, res) {
  res.send(new Date());
});

app.get('/convert/:currency/:value', function (req, res) {
    //hint switch on req.params.currency
  console.log(req.params.currency);
  console.log(req.params.value*70);
  res.send({value: req.params.value/68.1});
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



request(app)
  .get('/convert/INR/1')
  .expect('Content-Type', /json/)
  .expect(200, {
        value: 1/68.1
      })
  .end(function(err, res) {
    if (err) throw err;
});
