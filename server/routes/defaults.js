var router = require('express').Router();
var defs = require('../controllers/defaults.js');

router.get('/get', defs.getTest);
router.post('/send', defs.sendTest);

module.exports = router;