<script lang="ts">
	import { todos } from './todo.svelte';

	let todoText = '';
	function handleAddTodo() {
		todos.addTodo(todoText);
	}

	function updateCompleted(id: string, value: boolean) {
		todos.updateTodo(id, { completed: value });
	}
</script>

<div class="layout">
	<a href="/todo-two">Todo Two</a>

	<div>
		<label for="todo-text">Todo Text</label>
		<input id="todo-text" type="text" bind:value={todoText} />
		<button on:click={handleAddTodo}>Add</button>
	</div>

	<div>
		{#each todos.todos as todo}
			<p>ID: {todo.id} | Text: {todo.text} | Completed: {todo.completed}</p>
			<button
				on:click={() => {
					updateCompleted(todo.id, !todo.completed);
				}}>Update Completed</button
			>
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
