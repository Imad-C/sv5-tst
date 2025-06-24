class Todo {
	id: string = crypto.randomUUID();
	text: string;
	completed = $state<boolean>(false);

	constructor(text: string) {
		this.text = text;
	}
}

class Todos {
	todos = $state<Todo[]>([]);
	length = $derived(this.todos.length);

	addTodo(text: string) {
		const todo = new Todo(text);
		this.todos.push(todo);
	}

	updateTodo(id: string, updates: Partial<Todo>) {
		const todo = this.todos.find((t) => t.id === id);
		if (todo) {
			Object.assign(todo, updates);
		}
	}
}

export const todos = new Todos();
// export let length = $derived(todos.todos.length);
