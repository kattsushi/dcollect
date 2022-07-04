import { todoDeleted, todoError, todoUpdating } from './slice';

// Add a new todo to the list
export const addTodo = (todo: any) => async (dispatch: Function) => {
	if (!todo) return;
	dispatch(todoUpdating());
	// dispatch(todoAdded(todo));
};

// Add a new todo to the list
export const removeTodo = (todo: any) => async (dispatch: Function) => {
	if (!todo) return;
	dispatch(todoUpdating());
	dispatch(todoDeleted(todo));
};

// Example of an async thunk that dispatches actions
export const fetchRandomTodo = () => async (dispatch: Function) => {
	dispatch(todoUpdating());
	fetch('https://jsonplaceholder.typicode.com/todos/1')
		.then((response) => response.json())
		// .then((json) => dispatch(todoAdded(json.title)))
		.catch((error) => dispatch(todoError(error.toString())));
};
