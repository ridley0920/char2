var http            = require('http')
var MongoClient     = require('mongodb').MongoClient
var assert          = require('assert')
var url = 'mongodb://localhost:27017/myproject'
module.exports = MongoClient
// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err)
  console.log("Connected successfully to server")
  db.close()
})
//var server = http.createServer(app)