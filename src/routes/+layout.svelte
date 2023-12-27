<script>
	import './main.css';
	import logo from '$lib/images/topic-talk.png';
</script>

<nav>
	<a class="logo" href="/">
		<img src={logo} alt="topic-talk-logo" />
	</a>
	<div class="nav-items">
		<a id="about-btn" href="about">About</a>
		<a id="new-topic-btn" href="/">New Topic!</a>
	</div>
</nav>

<slot />

<style>
	nav {
		height: 64px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10px;
		background-color: #fefdfd;
		color: #fff;
	}

	.logo {
		height: 100%;
		margin-left: 3vw;
		cursor: pointer;
	}

	.logo img {
		object-fit: contain;
		width: 100%;
		height: 100%;
	}

	#about-btn {
		border: none;
		background: none;
		font-size: larger;
		margin-right: 2vw;
	}
	#about-btn:hover {
		color: gray;
		transition: 200ms;
	}

	#new-topic-btn {
		font-weight: bold;
		font-size: large;
		padding: 5px 15px;
		background-color: #b3e5fc;
		border: 2px solid #029ae4;
		border-radius: 7px;
		margin-right: 5px;
	}
	#new-topic-btn:hover {
		color: #686a78;
		background-color: #93ddff;
		transition: 200ms;
	}
</style>
