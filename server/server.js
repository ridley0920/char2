var 
  http            = require('http'),
  https           = require('https'),
  //path            = require('path'),
  //socket          = require('socket.io'),
  express         = require('express'),
  //morgan          = require('morgan'),
  MongoClient     = require('mongodb').MongoClient, 
  assert          = require('assert');
  //fs              = require('fs');
  //babel           = require('babel-core/register');
// Connection URL
var url = 'mongodb://localhost:27017/myproject';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  //console.log("Connected successfully to server");

  db.close();
});


var app = module.exports = express();
var server = http.createServer(app);
//var io = socket(server);
//app.use("/front", express.static(path.join(__dirname,'../front')));
//app.use('/', require('../server/routes/defaults'));
if(!module.parent)
{
  //sheet.listen(3001);
  server.listen(3000);
  console.log('Dev Server started on port 3000');
}