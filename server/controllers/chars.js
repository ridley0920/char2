var conn = require('../../config/monCon.js');
var chars = require("../models/chars.js");
module.exports.getRoom = function(req, res) {
	char.chars(req, conn, function(results) {
	    res.json(results);
	});
};