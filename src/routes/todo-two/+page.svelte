<script lang="ts">
	import { todos } from '../todo/todo.svelte';
	import Todo from '../../components/Todo.svelte';

	let todoText = $state('');
	let length = $state(0);

	$effect(() => {
		length = todos.todos.length;
	});
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

	<p>Length: {length}</p>
</div>

<style>
	.layout {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
</style>
