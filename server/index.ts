import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { User } from './models/User';
import { Message } from './models/Message';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
	cors: {
		origin: 'http://localhost:5173',
		methods: ['GET', 'POST']
	}
});

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

let users = new Map<String, User>();

io.on('connection', (socket) => {
	socket.on('join room', (user: User) => {
		console.log(user.senderUsername + ' joined topic ' + user.topic);
		users.set(socket.id, user);

		socket.join(user.topic);
		socket.to(user.topic).emit('user joined', user);
	});

	socket.on('message', (messageText) => {
		let user = users.get(socket.id);

		if (user == undefined) return;

		let message: Message = {
			content: messageText,
			sender: user,
			isSystem: false
		};

		console.log(user.senderUsername + ' sent ' + message.content);

		socket.to(user.topic).emit('message', message);
	});

	socket.on('disconnect', () => {
		let user = users.get(socket.id);
		users.delete(socket.id);

		if (user == undefined) return;

		console.log(user.senderUsername + ' left room ' + user.topic);
		socket.to(user.topic).emit('user left', user);
	});
});

httpServer.listen(3000);
