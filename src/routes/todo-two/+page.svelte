<script lang="ts">
	import { todos } from '../todo/todo.svelte';
	import Todo from '../../components/Todo.svelte';

	let todoText = $state('');
</script>

<div class="layout">
	<a href="/todo">Todo One</a>

	<div>
		<label for="todo-text">Todo Text</label>
		<input id="todo-text" type="text" bind:value={todoText} />
		<button
			onclick={() => {
				todos.addTodo(todoText);
			}}>Add</button
		>
	</div>

	<div>
		{#each todos.todos as todo}
			<Todo {todo} />
		{/each}
	</div>

	<p>Length: {todos.todos.length}</p>

	<pre>{JSON.stringify(todos.completed, null, 2)}</pre>
</div>

<style>
	.layout {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
</style>
