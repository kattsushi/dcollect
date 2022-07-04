// Set up simple selectors
const loading = (state: any) => state.todos.loading;
const todos = (state: any) => state.todos.todos;
const errorMessage = (state: any) => state.todos.errorMessage;

// Export as group for easier import in components
export const todoSelectors = { loading, todos, errorMessage };
