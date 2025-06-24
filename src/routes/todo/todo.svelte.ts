// class Todo {
// 	id: string = crypto.randomUUID();
// 	text: string;
// 	completed: boolean = $state(false);

// 	constructor(text: string) {
// 		this.text = text;
// 	}
// }

// class Todos {
// 	todos = $state<Todo[]>([]);

// 	addTodo(text: string) {
// 		const todo = new Todo(text);
// 		this.todos.push(todo);
// 	}

// 	updateTodo(id: string, updates: Partial<Todo>) {
// 		const todo = this.todos.find((t) => t.id === id);
// 		if (todo) {
// 			Object.assign(todo, updates);
// 		}
// 	}
// }

// export const todos = new Todos();

type Todo = {
	id: string;
	text: string;
	completed: boolean;
};

class Todos {
	todos = $state<Todo[]>([]);

	addTodo(text: string) {
		this.todos.push({ id: crypto.randomUUID(), text: text, completed: false });
	}

	updateTodo(id: string, updates: Partial<Todo>) {
		const todo = this.todos.find((t) => t.id === id);
		if (todo) {
			Object.assign(todo, updates);
		}
	}
}

export const todos = new Todos();
