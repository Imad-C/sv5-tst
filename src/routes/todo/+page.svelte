<script lang="ts">
	import { todos } from './todo.svelte';
	import Todo from '../../components/Todo.svelte';
	import Another from './Another.svelte';

	function handleFormSubmission(ev) {
		ev.preventDefault();
		const formdata = new FormData(ev.target);
		const text = String(formdata.get('text')).trim();
		todos.addTodo(text);
	}

	const qty = $derived(todos.todos.length);
</script>

<div class="layout">
	<a href="/todo-two">Todo Two</a>

	<form onsubmit={handleFormSubmission}>
		<label for="todo-text">Todo Text</label>
		<input id="todo-text" name="text" type="text" value="My task" />
		<button>Add</button>
	</form>

	<div>
		{#each todos.todos as todo}
			<Todo {todo} />
		{/each}
	</div>

	<Another />

	<p>Number of tickets: {qty}</p>

	<pre>{JSON.stringify(todos.completed, null, 2)}</pre>
</div>

<style>
	.layout {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
</style>
