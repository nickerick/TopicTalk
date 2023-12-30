<script lang="ts">
	import { page } from '$app/stores';
	import { afterUpdate } from 'svelte';
	import type { Message } from '../../../models/Message';

	// Set header as current chatroom's topic
	let topic = $page.params.topic;
	topic = topic.charAt(0).toUpperCase() + topic.slice(1);

	// User's current input to be sent as a message
	let messageInput: string = '';

	// List of all messages in the user's current chatroom session
	let messages: Message[] = [];

	let messagesContainer: HTMLDivElement;

	afterUpdate(() => {
		// Auto scroll to bottom of messages
		messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
	});

	// Update list with user's new message and broadcast message to socket
	function sendMessage() {
		if (messageInput.length <= 0) return;

		let obj: Message = {
			content: messageInput,
			senderColorHex: '#FF0000',
			senderUsername: 'RedRhino',
			isSystem: false
		};

		messages = [...messages, obj];

		messageInput = '';
	}
</script>

<div class="container">
	<div class="header">{topic}</div>
	<div class="chatbox">
		<div class="message-list" bind:this={messagesContainer}>
			<div class="message">
				<strong>
					System: Joined topic as <span style="color: red;">RedRhino</span>
				</strong>
			</div>
			<!-- <div class="message">
				<strong>YellowGiraffe:</strong>
				mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
			</div> -->

			{#each messages as message, i}
				{#if message.isSystem}
					<div class="message">
						<strong
							>System: <span style="color: {message.senderColorHex};">{message.senderUsername}</span
							>
							has {message.content} the topic</strong
						>
					</div>
				{:else}
					<div class="message">
						<strong style="color: {message.senderColorHex};">{message.senderUsername}:</strong>
						{message.content}
					</div>
				{/if}
			{/each}
		</div>
		<div class="chat-input">
			<input
				placeholder="Enter message..."
				maxlength="128"
				bind:value={messageInput}
				on:keyup={(event) => {
					if (event.key === 'Enter') sendMessage();
				}}
			/>
			<button on:click={sendMessage}>Send</button>
		</div>
	</div>
</div>

<style>
	.container {
		margin: 8vh auto;
		padding: 1em;
		width: 50%;
		height: 71vh;
		display: flex;
		flex-direction: column;
		background-color: #fefdfd;
		border-radius: 1em;
		overflow: auto;
		align-items: center;
	}

	.header {
		font-weight: bold;
		font-size: 3em;
		text-align: center;
		width: 100%;
	}

	.chatbox {
		width: 90%;
		height: 100%;
		padding: 0.5em;
		border: 4px solid #029ae4;
		border-radius: 8px;
		background-color: #efefef;
		margin: 2vh 0vw;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		gap: 0.5em;
	}

	.message-list {
		height: 85%;
		width: 100%;
		max-width: 100%;
		padding: 0.2em;
		overflow-y: auto;
		/* display: flex; */
		/* flex-direction: column-reverse; */
	}

	.message-list::-webkit-scrollbar {
		width: 12px;
	}
	.message-list::-webkit-scrollbar-track {
		border-radius: 8px;
		background-color: #e7e7e7;
		border: 1px solid #cacaca;
		box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
	}
	.message-list::-webkit-scrollbar-thumb {
		border-radius: 8px;
		background-color: #b3e5fc;
	}

	.message {
		width: 100%;
		word-wrap: break-word;
		font-size: larger;
		margin-bottom: 0.5rem;
	}

	.chat-input {
		display: flex;
		width: 100%;
		max-height: 15%;
		justify-content: center;
	}

	.chat-input input {
		width: 85%;
		height: 100%;
		text-align: center;
		font-size: 1.5em;
		padding: 0.5em;
		border: 2px solid #ababab;
		border-radius: 4px;
		background-color: white;
	}

	.chat-input button {
		width: 15%;
		height: 100%;
		font-weight: bold;
		font-size: 1.5rem;
		padding: 0.5rem;
		background-color: #b3e5fc;
		border: 2px solid #029ae4;
		border-radius: 4px;
	}
</style>
