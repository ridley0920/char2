exports = module.exports = function(io){
	io.on('conneciton', function(socket){
		socket.on('dataSent', function(msg){
			console.log('emit got');
			socket.broadcast.emit('valueChanged', msg);
		});
	});
}
