<script>
    export let options;

	let selected = options[0];
</script>

<select bind:value={selected}>
    {#each options as option}
        <option value={option}>{option.color}</option>
    {/each}
</select>
