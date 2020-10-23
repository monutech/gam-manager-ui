import { writable } from 'svelte/store';

function createCount() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		increment: () => update(n => n + 1),
		decrement: () => update(n => n - 1),
		reset: () => set(0)
	};
}

const count = createCount();

function createFilter() {
	const { subscribe, set } = writable("No one")
	
	return {
		subscribe,
		set: (value) => (set(value))
	}
}

function createAction() {
	const { subscribe, set } = writable("No one")
	
	return {
		subscribe,
		set: (value) => (set(value))
	}
}

function createLineItem() {
	const { subscribe, set } = writable("No one")
	
	return {
		subscribe,
		set: (value) => (set(value))
	}
}

const filter = createFilter();
const action = createAction();
const lineItem = createLineItem();

export {count, filter, action, lineItem}