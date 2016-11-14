var server = require('http').Server()
var io = require('socket.io')(server)

server.listen(80)

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' })
  socket.on('my other event', function (data) {
  })
})
