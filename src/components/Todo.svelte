<script lang="ts">
	import { getTodosState } from '../routes/todo/todo.svelte';

	let { todo } = $props();

	const todos = getTodosState();

	function updateCompleted() {
		todos.updateTodo(todo.id, { completed: !todo.completed });
	}
</script>

<p>ID: {todo.id} | Text: {todo.text} | Completed: {todo.completed}</p>
<button
	onclick={() => {
		updateCompleted();
	}}>Update Completed</button
>
<input type="checkbox" bind:checked={todo.completed} />
