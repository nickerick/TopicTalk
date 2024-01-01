import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { handler } from '../build/handler.js';
import { Message } from './models/Message.js';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
	cors: {
		origin: 'http://localhost:5173',
		methods: ['GET', 'POST']
	}
});

app.use(handler);

let users = new Map();

io.on('connection', (socket) => {
	socket.on('join room', (user) => {
		console.log(user?.senderUsername + ' joined topic ' + user?.topic);
		users.set(socket.id, user);

		socket.join(user.topic);
		socket.to(user.topic).emit('user joined', user);
	});

	socket.on('message', (messageText) => {
		let user = users.get(socket.id);

		if (user == undefined) return;

		let message = new Message(messageText, user, false);

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

server.listen(3000, () => {
	console.log('Started server on port 3000');
});
