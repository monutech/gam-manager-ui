<script>
    import Select from '../common/Select.svelte';
    let title = 'Filter';
    export let filters = [];

</script>

{#if filters.length > 1}
    <Select  type={'filter'} title={title} options={filters} />
{/if}