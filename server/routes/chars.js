var router = require('express').Router();
var char = require('../controllers/chars.js');

//router.get('/character', char.getRoom);
router.get('/getC', char.getChar);
router.post('/send', char.sendChar);

//send back to serve.js
module.exports = router;