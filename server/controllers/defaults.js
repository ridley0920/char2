var conn = require('../../config/monCon.js');
var defs = require('../models/defaults.js');

module.exports.getTest = function(req, res) {
	console.log('controller output pre model');
	defs.getT(req, conn, function(results) {
		console.log('back to control');
		res.json(results);
	});
};
module.exports.sendTest = function(req, res) {
	defs.sendT(req, conn, function(results) {
		console.log('back to control');
		res.json(results);
	});
};