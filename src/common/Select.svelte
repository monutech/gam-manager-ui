<script>
	// import RedThing from './RedThing.svelte';
	// import GreenThing from './GreenThing.svelte';
    // import BlueThing from './BlueThing.svelte';
    import { filter, action, lineItem } from '../store/store';
	export let options = [];
	export let title;
	export let type;

    let selected = options[0];
    function updateStore(value) {
        if (type === 'filter') {
            filter.set(selected)
        } else if (type === 'action') {
            action.set(selected)
        } else if (type === 'lineItem') {
            lineItem.set(selected)
        }
    }
    $: updateStore(selected)
</script>

<style>
    #selectDropdown select {
        min-width:200px;
        transition: all .2s ease-out
    }
    #selectDropdown select:focus {
        min-width:250px;
    }


</style>

{#if options.length > 1}
<div id="selectDropdown">
    <h5>{title}</h5>
    <select bind:value={selected} >
        {#each options as option}
            <option value={option}>{option.color}</option>
        {/each}
    </select>
</div>
{/if}