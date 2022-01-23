<script>
	import "../app.scss";
	import Nav from "$lib/Nav.svelte";
</script>

<header>
	<h1>Welcome to Lifi</h1>
</header>
<Nav />
<main>
	<slot />
</main>

<footer>
	Made with <span class="heart">&#10084;&#65039;</span> by xvishaldongre
</footer>

<style lang="scss">
	header,
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	header {
		margin: 0;
	}

	main {
		height: 100%;
		margin: 0 0.25rem;
	}
	footer {
		display: flex;
		flex-direction: row;
		margin-top: auto;
		font-size: 0.75em;
		column-gap: 0.5rem;
		margin: 0.5rem;
		justify-content: center;

		.heart {
			font-family: sans-serif;
			display: inline;
		}
	}
</style>
