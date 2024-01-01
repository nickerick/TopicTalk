import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { User } from './models/User';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {});

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

let users = new Map<String, User>();

io.on('connection', (socket) => {
	socket.on('join room', (user: User) => {
		console.log(user.senderUsername + ' joined');
		users.set(socket.id, user);

		socket.join(user.topic);
		socket.to(user.topic).emit('join', user);
	});

	socket.on('message', (message) => {
		let user = users.get(socket.id);

		if (user == undefined) return;

		socket.to(user.topic).emit('chat', message);
	});

	socket.on('disconnect', () => {
		let user = users.get(socket.id);
		users.delete(socket.id);

		if (user == undefined) return;

		socket.to(user.topic).emit('leave', user);
	});
});

httpServer.listen(3000);
