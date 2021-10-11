<script>
import { onMount } from "svelte";

	onMount(async() => {
		const response = await fetch("http://localhost:7000/eco");
		console.log( await response.json())

	})
</script>

<div class="container">
	<header></header>
	<main></main>
	<footer></footer>
</div>

<style>
	.container {
		text-align: center;
		margin: 0 auto;
		background-image: url('/asset/background.jpg');
		background-repeat: no-repeat;
		background-size: 100% 100%;
		height: 100%;
	}


	@media (min-width: 640px) {
		.container {
			max-width: none;
		}
	}
</style>