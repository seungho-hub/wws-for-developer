<script>
	import "./styles.css";
	import Topbar from "./Topbar.svelte";
</script>

<div class="app">
	<Topbar />
	<main>
		<slot />
	</main>
</div>

<style lang="scss">
	main {
		margin-top: 5em;
		padding-top: 5em;
		height: calc(100vh - 5em);
	}
</style>
