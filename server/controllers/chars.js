var conn = require('../../config/monCon.js');
var chars = require("../models/chars.js");
/*module.exports.getRoom = function(req, res) {
	char.chars(req, conn, function(results) {
	    res.json(results);
	});
};*/
module.exports.getChar = function(req, res) {
	// console.log('controller output pre model');
	chars.getCharater(req, conn, function(results) {
		// console.log('back to control');
		res.json(results);
	});
};
module.exports.sendChar = function(req, res) {
	chars.sendCharacter(req, conn, function(results) {
		// console.log('back to control');
		res.json(results);
	});
};