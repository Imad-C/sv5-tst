<script lang="ts">
	let { todo } = $props();
</script>

<p>ID: {todo.id} | Text: {todo.text} | Completed: {todo.completed}</p>
<input type="checkbox" bind:checked={todo.completed} />
