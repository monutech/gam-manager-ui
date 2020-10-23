<script>
    import Action from '../components/Action.svelte';
    import LineItem from '../components/LineItem.svelte';
    import Filter from '../components/Filter.svelte';
    import { count } from '../store/store';
    const options = [
		{ color: 'red' },
		{ color: 'green' },
		{ color: 'blue' },
    ];
    let answer = '';
    
    function handleSubmit() {
		alert(`answered question) with "${answer}"`);
	}
</script>

<style>
	.content-container {
		margin: 0 5%;
	}
    .card {

    }
</style>

<div class="content-container">
    <div class="card">
        <div class="selectors">
            <LineItem />
            <Action />
            <Filter />
        </div>
        <button on:click={handleSubmit} type=submit>
            Submit
        </button>
    </div>

</div>