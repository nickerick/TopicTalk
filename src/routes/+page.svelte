<script lang="ts">
	let topicInput: string = '';

	function updateTopic(event: KeyboardEvent): void {
		if (event.key === 'Enter') {
			joinTopic();
		}

		const value = (event.currentTarget as HTMLInputElement).value;
		topicInput = value.toLowerCase();
	}

	function joinTopic(): void {
		if (topicInput.length > 0) {
			window.location.href = '/topic/' + topicInput;
		}
	}
</script>

<div class="container">
	<div class="item header">What do you want to talk about?</div>
	<div class="item text">
		Enter a topic you are interested in. TopicTalk will connect you to a chat room with others who
		share the same interest.
	</div>
	<div class="item">
		<input id="topic-input" placeholder="Enter topic here..." type="text" on:keyup={updateTopic} />
	</div>
	<div class="item">
		<button id="join-btn" on:click={joinTopic}> Let's Talk! </button>
	</div>
</div>

<style>
	.container {
		margin: 10vh auto;
		padding: 1em;
		width: 50%;
		height: 100%;
		min-height: 51vh;
		display: flex;
		flex-direction: column;
		background-color: #fefdfd;
		border-radius: 1em;
	}

	.item {
		width: 100%;
		text-align: center;
	}

	.header {
		font-weight: bold;
		font-size: 3em;
		text-align: center;
		margin-top: 2.5vh;
	}

	.text {
		font-size: 1.4em;
		text-align: center;
		padding: 0 6.5vw;
		margin-top: 3.5vh;
	}

	#topic-input {
		width: 70%;
		margin-top: 5vh;
		text-align: center;
		font-size: 1.5em;
		padding: 0.5em;
		border: 2px solid #ababab;
		border-radius: 4px;
		background-color: white;
	}

	#join-btn {
		width: 70%;
		margin-top: 2vh;
		font-weight: bold;
		font-size: 1.5em;
		padding: 0.5em;
		background-color: #b3e5fc;
		border: 2px solid #029ae4;
		border-radius: 4px;
	}
	#join-btn:hover {
		color: #686a78;
		background-color: #93ddff;
		transition: 200ms;
	}
</style>
