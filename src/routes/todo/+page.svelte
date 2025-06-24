<script lang="ts">
	import { todosState } from './todo.svelte';
	import Todo from '../../components/Todo.svelte';
	// const todos = getTodosState();

	let todoText = '';
	function handleAddTodo() {
		todosState.addTodo(todoText);
	}

	function handleCompleteAllTodos() {
		todosState.completeAll();
	}

	let todosLength = $derived(todosState.todos.length);

	// $effect(() => {
	// 	const equal = todosState.todos.length === todosState.todos.length;
	// 	console.log('this has updated cos something in here is reactive');
	// });

	let length = $state(todosState.todos.length);
</script>

<div class="layout">
	<a href="/todo-two">Todo Two</a>

	<div>
		<label for="todo-text">Todo Text</label>
		<input id="todo-text" type="text" bind:value={todoText} />
		<button onclick={handleAddTodo}>Add</button>
	</div>

	<div>
		{#each todosState.todos as todo (todo.id)}
			<Todo {todo} />
		{/each}
	</div>

	<p>
		<button onclick={handleCompleteAllTodos}>Mark all todos as completed</button>
	</p>

	<!-- <p>{todosLength}</p> -->
	<p>{todosState.length}</p>
	<!-- <p>Completed: {todosState.qtyOfCompleted}</p>
	<pre>{JSON.stringify(todosState.theCompletedItems, null, 2)}</pre> -->
	<!-- <p>{length}</p> -->
</div>

<style>
	.layout {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
</style>
