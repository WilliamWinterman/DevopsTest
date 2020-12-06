var express = require('express')
var app = express()
app.disable('etag'); //will return 200 http status code on success
var counter = 0

// GET method route, when recieved a get request it will respond with the counter of post requests.
app.get('/getCounter', function (req, res) {
  res.send("Post Counter: " + counter)
  console.log(counter);
  })
  
// POST method route
app.post('/postCounter', function (req, res) {
    counter++

  })
  app.listen(80)
