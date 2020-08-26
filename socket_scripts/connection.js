let chat_history = []

module.exports.connection = function(io) {
    io.on('connection', socket => {
        console.log("connect")

        socket.on('chat message', (msg) => {
            chat_history.push(msg)
            socket.broadcast.emit('chat message', msg)
            // io.emit('chat message', msg)
            console.log(chat_history)
        })

        socket.on('disconnect', () => {
            console.log("disconnect")
        })
    })
}