<script>
    import Select from '../common/Select.svelte';
    let name = 'James';
    const options = [
		{ color: 'red' },
		{ color: 'green' },
		{ color: 'blue' },
	];
</script>

<h1>This is the Content {name}!</h1>
{#if options.length > 1}
    <Select options={options} />
{/if}