export class Message {
	constructor(content, sender, isSystem) {
		this.content = content;
		this.sender = sender;
		this.isSystem = isSystem;
	}
}
