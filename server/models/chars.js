/**
 * Each "module.exports.[NAME]" is available as a function to the controller that calls it. 
 * any rerquired attributes must be declared prior to connection, callback
 * ------------------------------*/

// Single publication
module.exports.chars = function(req, conn, callback){
	// Use connect method to connect to the Server
	conn.connect(url, function (err, db) {
	  if (err) {
	    console.log('Unable to connect to the mongoDB server. Error:', err);
	  } 
	  else {
	    //HURRAY!! We are connected. :)
	    console.log('Connection established to', url);

	    // Get the documents collection
	    var collection = db.collection('users');

	    //Create some users
	    var user1 = {name: 'modulus admin', age: 42, roles: ['admin', 'moderator', 'user']};
	    var user2 = {name: 'modulus user', age: 22, roles: ['user']};
	    var user3 = {name: 'modulus super admin', age: 92, roles: ['super-admin', 'admin', 'moderator', 'user']};

	    // Insert some users
	    collection.insert([user1, user2, user3], function (err, result) {
	      if (err) {
	        console.log(err);
	      } else {
	        console.log('Inserted %d documents into the "users" collection. The documents inserted with "_id" are:', result.length, result);
	      }
	      //Close connection
	      db.close();
	    });
	  }
	});
}



/*

MongoClient.connect(url, function(err, db) {
assert.equal(null, err)
console.log("Connected successfully to server")
// Get the documents collection
var collection = db.collection('users');

//Create some users
var user1 = {name: 'modulus admin', age: 42, roles: ['admin', 'moderator', 'user']};
var user2 = {name: 'modulus user', age: 22, roles: ['user']};
var user3 = {name: 'modulus super admin', age: 92, roles: ['super-admin', 'admin', 'moderator', 'user']};
db.close()
})
	





	conn. (
	{
	 	 callback(result);
	});
}


*/