<script lang="ts">
	let { todo } = $props();
</script>

<div class="layout">
	<p>ID: {todo.id}</p>
	<p>|</p>
	<p>Text: {todo.text}</p>
	<p>|</p>
	<p>Completed: {todo.completed}</p>
	<input type="checkbox" bind:checked={todo.completed} />
</div>

<style>
	.layout {
		display: flex;
		gap: 1rem;
	}
</style>
