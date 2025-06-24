<script>
	// import { setTodosState } from './todo/todo.svelte';

	let { children } = $props();

	// setTodosState();
</script>

<main>
	{@render children()}
</main>
