<script>
    import Action from '../components/Action.svelte';
    import LineItem from '../components/LineItem.svelte';
    import Filter from '../components/Filter.svelte';
    import { filter, action, lineItem } from '../store/store';
    const options = [
		{ color: 'red' },
		{ color: 'green' },
		{ color: 'blue' },
    ];
    let answer = '';
    let listItems = [
        { color: 'red' },
		{ color: 'green' },
		{ color: 'blue' },
    ];
    let filters = [
        { color: 'orange' },
		{ color: 'purple' },
		{ color: 'black' },
    ];
    let actions = [
        { color: 'yellow' },
		{ color: 'white' },
		{ color: 'black' },
    ];
    
    function handleSubmit() {
		console.log('filter', $filter);
		console.log('action', $action);
		console.log('lineItem', $lineItem);
    }
    
    async function getResult() {
        // let response = await fetch(`http://numbersapi.com/${query}`);
        console.log('res');
        // let text = await response.text();
        // let data = text;
        // return data;
    }

    getResult();

</script>

<style>
	.content-container {
		margin: 0 5%;
	}
    .card {
        background-color: white;
        border-radius: 4px;
        padding: 32px;
        display: gird;
        grid-template-rows: 80px auto;
        box-shadow: 5px 5px 6px #d0cdcd;
    }
    .selectors {
        width: 100%;
        display: inline-flex;
        justify-content: space-around;
        flex-direction: row;
    }

    h4 {
        margin: 0 0 8px;
    }
</style>

<div class="content-container">
    <div class="card">
        <h4>Make a request</h4>
        <div class="selectors">
            <LineItem lineItems={listItems} />
            <Action actions={actions} />
            <Filter filters={filters}/>
        </div>
        <div style="text-align: right; margin: 23px 12% 0 0;">
            <button class="btn" on:click={handleSubmit} type=submit>
                Submit
            </button>
        </div>
    </div>

</div>