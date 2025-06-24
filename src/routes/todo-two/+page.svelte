<script lang="ts">
	import { getTodosState } from '../todo/todo.svelte';
	import Todo from '../../components/Todo.svelte';
	const todos = getTodosState();

	let todoText = '';
	function handleAddTodo() {
		todos.addTodo(todoText);
	}
</script>

<div class="layout">
	<a href="/todo">Todo One</a>

	<div>
		<label for="todo-text">Todo Text</label>
		<input id="todo-text" type="text" bind:value={todoText} />
		<button on:click={handleAddTodo}>Add</button>
	</div>

	<div>
		{#each todos.todos as todo}
			<Todo {todo} />
		{/each}
	</div>
</div>

<style>
	.layout {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
</style>
