const io = require('socket.io')(process.env.PORT || 8000);

const users = [];

io.on('connection', socket => {
    socket.on('NEW_USER', user => {
        socket.peerId = user.id
        users.push(user);
        socket.emit('LIST_USERS', Array.from(users.values()));
        socket.broadcast.emit('NEW_USER_CHECKIN', user);
    })

    socket.on('disconnect', () => {
        const index = users.findIndex(user => user.id == socket.peerId);
        users.splice(index, 1);
        io.emit('SOMEONE_DISCONNECT', socket.peerId);
    })
});

console.log('Server is running');