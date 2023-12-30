<script>
	import { page } from '$app/stores';

	let topic = $page.params.topic;
	topic = topic.charAt(0).toUpperCase() + topic.slice(1);
</script>

<div class="container">
	<div class="header">{topic}</div>
	<div class="chatbox">
		<div class="message-list">
			<div class="message">System: User BlueRhino has joined the topic.</div>
			<div class="message">BlueBobcat: Hello!</div>
			<div class="message">BlueBobcat: What kind of music do you listen to?</div>
			<div class="message">System: User YellowGiraffe has joined the topic.</div>
			<div class="message">
				YellowGiraffe: Hi everyone, I like country music, what about you guuys
			</div>
			<div class="message">
				YellowGiraffe: Hi everyone, I like country music, what about you
				guuysfasdfasdfasdfasdfasdfasdfasdfadsfasdfasdf
			</div>
			<div class="message">
				<strong>YellowGiraffe:</strong>
				mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
			</div>
			<div class="message">
				YellowGiraffe:
				mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
			</div>
			<div class="message">
				YellowGiraffe:
				mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
			</div>
			<div class="message">
				YellowGiraffe:
				mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
			</div>
		</div>
		<div class="chat-input">
			<input placeholder="Enter message..." maxlength="128" />
			<button>Send</button>
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
