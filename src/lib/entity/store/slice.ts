import { createSlice } from '@reduxjs/toolkit';

// Define initial state, slice name, and reducers
const todoSlice = createSlice({
	name: 'todos',
	initialState: {
		loading: false,
		todos: [],
		errorMessage: null
	},
	reducers: {
		todoUpdating(state) {
			state.loading = true;
		},
		todoDeleted(state, action) {
			state.loading = false;
			state.errorMessage = null;
			state.todos = state.todos.filter((t) => t !== action.payload);
		},
		todoError(state, action) {
			state.loading = false;
			state.errorMessage = action.payload;
		}
	}
});

// Export actions
export const { todoUpdating, todoDeleted, todoError } = todoSlice.actions;

// Export reducer by default for loading into configureStore
export default todoSlice.reducer;
