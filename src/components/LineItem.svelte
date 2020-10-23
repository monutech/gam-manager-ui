<script>
    import Select from '../common/Select.svelte';
    let title = 'Line Item';
    export let lineItems = [];

</script>

{#if lineItems.length > 1}
    <Select type={'lineItem'} title={title} options={lineItems} />
{/if}