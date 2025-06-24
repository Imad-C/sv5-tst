<script>
	import { todos } from './todo.svelte';
	$inspect(todos);
</script>

<ul>
	{#each todos.todos as todo (todo.id)}
		<li class:completed={todo.completed}>{todo.text}</li>
	{/each}
</ul>

<button onclick={() => todos.addTodo('brush your teeth')}> 😬 Brush teeth </button>

<pre>Number of completed todos: {todos.completed}</pre>

<style>
	ul {
		background: red;
	}
	li.completed {
		background: green;
	}
</style>
