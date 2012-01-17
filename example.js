var express = require('express')
var blackout = require('./blackout')

var app = express.createServer()
app.use(blackout())
app.get('/', function (req, res) {
  res.send('site up')
})
app.listen(8080, 'localhost')
