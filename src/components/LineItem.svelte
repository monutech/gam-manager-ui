<script>
    import Select from '../common/Select.svelte';
    let title = 'Line Item';
    const options = [
		{ color: 'red' },
		{ color: 'green' },
		{ color: 'blue' },
	];
</script>

{#if options.length > 1}
    <Select title={title} options={options} />
{/if}