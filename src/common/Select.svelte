<script>
	// import RedThing from './RedThing.svelte';
	// import GreenThing from './GreenThing.svelte';
	// import BlueThing from './BlueThing.svelte';
	export let options = [];
	export let title;

	let selected = options[0];
</script>

{#if options.length > 1}
    <h5>{title}</h5>
    <select bind:value={selected}>
        {#each options as option}
            <option value={option}>{option.color}</option>
        {/each}
    </select>
{/if}