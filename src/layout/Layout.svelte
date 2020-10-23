<script>
    let name = 'James';
    import Header from './Header.svelte'
    import Content from './Content.svelte'
</script>

<style>
	.theme {
		background-color: #EEF4F9;
        min-height: 100vh;
	}
    :global(body) {
		/* this will apply to <body> */
		margin: 0;
		padding: 0;
	}
</style>

<div class="theme">
    <Header />
    <Content />
</div>