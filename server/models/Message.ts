import type { User } from './User';

export interface Message {
	content: string;
	sender: User;
	isSystem: boolean;
}
