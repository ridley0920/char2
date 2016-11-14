module.exports.getT = function(req, conn, callback){
	conn.client.connect(conn.link, function (err, db) {
	    if (err) {
	      	console.log('Unable to connect to the mongoDB server. Error:', err);
	    }
	    else{	
    		console.log('Connected to Database');
			db.collection('testing', function(err, coll){
				if(err){
					console.log('Unable to connect to the mongoDB collection. Error:', err);
				}
				else{
					console.log('Collection Acquired');
					coll.find( {} ).toArray(function(err, docs){
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
module.exports.sendT = function(req, conn, callback){
  console.log('in model');
  conn.client.connect(conn.link, function (err, db) {
    if (err) {
      	console.log('Unable to connect to the mongoDB server. Error:', err);
    }
    else{	
		console.log('Connected to Database');
		db.collection('testing', function(err, coll){
			if(err){
				console.log('Unable to connect to the mongoDB collection. Error:', err);
			}
			else{
				console.log('Collection Acquired');
				console.log(req.body);
				/*coll.insert(req.body, function(err){
					if(err){
						console.log('Insert failed!');
					}
					else{
						console.log('Successful insertion!');
					}
				});*/
        callback(req.body);
			}
		})
	db.close();
	}
	});
}