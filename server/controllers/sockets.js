exports = module.exports = function(io){
	io.on('conneciton', function(socket){
		var address = socket.request.connection.remoteAddress;
		io.emit('chatApp-socket-1', 'User Connected'+address);

		socket.on('chatApp-socket-1', function(msg){
			io.emit('chatApp1', msg);
		});

		socket.on('disconnect', function()  {
			io.emit('chatApp-socket-1', 'User Disconnect');
		});
	});
}
