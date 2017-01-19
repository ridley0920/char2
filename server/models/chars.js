module.exports.getCharacter = function(req, conn, callback){
	conn.client.connect(conn.link, function (err, db) {
	    if (err) {
	      	console.log('Unable to connect to the mongoDB server. Error:', err);
	    }
	    else{	
    		console.log('Connected to Database');
			db.collection('titan', function(err, coll){
				if(err){
					console.log('Unable to connect to the mongoDB collection. Error:', err);
				}
				else{
					console.log('Collection Acquired');
					coll.find( {char: "Ridley"} ).toArray(function(err, docs){
						if(err){
							console.log('There was a problem.', err);
						}
						else{
							callback(docs);
						}
					})
				}
			})
    	db.close();
    	}
	});
}
module.exports.sendCharacter = function(req, conn, callback){
  console.log('in model');
  conn.client.connect(conn.link, function (err, db) {
    if (err) {
      	console.log('Unable to connect to the mongoDB server. Error:', err);
    }
    else{	
		console.log('Connected to Database');
		db.collection('titan', function(err, coll){
			if(err){
				console.log('Unable to connect to the mongoDB collection. Error:', err);
			}
			else{
				console.log('Collection Acquired');
				console.log(req.body);
				coll.insert(req.body, function(err){
					if(err){
						console.log('Insert failed!');
					}
					else{
						console.log('Successful insertion!');
					}
				});
        // callback(req.body);
			}
		})
	db.close();
	}
	});
}
/*module.exports.chars = function(req, conn, callback){
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
*/