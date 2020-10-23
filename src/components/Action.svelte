<script>
    import Select from '../common/Select.svelte';
    let title = 'Action';
    export let actions = [];

</script>
{#if actions.length > 1}
    <Select type={'action'} title={title} options={actions} />
{/if}