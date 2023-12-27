<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="container">
	<h1>{$page.status} {$page?.error?.message ?? 'Error'}</h1>
</div>

<style>
	.container {
		margin: 10vh auto;
		width: 25%;
		height: 20vh;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #fefdfd;
		border-radius: 1em;
	}
</style>
