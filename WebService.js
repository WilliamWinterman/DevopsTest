var express = require('express')
var app = express()
var counter = 0

// GET method route
app.get('/getCounter', function (req, res) {
  res.send({data: counter})
  })
  
// POST method route
app.post('/postCounter', function (req, res) {
    counter++
  })

  app.listen(3000, "127.0.0.1")

