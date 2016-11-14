var http            = require('http')
var MongoClient     = require('mongodb').MongoClient
var assert          = require('assert')
var url = 'mongodb://localhost:27017/charSheet'
var conn = {
	client: MongoClient, 
	ass: assert, 
	link: url, 
	meth: http}
module.exports = conn
