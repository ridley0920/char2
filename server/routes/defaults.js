var router = require('express').Router();
var defs = require('../controllers/defaults.js');

router.get('/get', defs.getTest);
router.post('/send', defs.sendTest);

/*
socket.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' })
  socket.on('my other event', function (data) {
  })
})*/


//var path   = require('path');

//router.get('/character', char);
/*router.get('/', function(req, res) {
	res.sendFile(path.resolve(path.join(__dirname,'../../front/index.html')));
})*/
//send back to serve.js
module.exports = router;