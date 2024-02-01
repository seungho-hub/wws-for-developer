<script>
	import "./styles.css";
	import Topbar from "./Topbar.svelte";
	import Footer from "./Footer.svelte";
</script>

<div class="app">
	<Topbar />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style lang="scss">
	main {
		margin-top: 5em;
		padding-top: 5em;

		display: flex;
		justify-content: center;
	}
</style>
