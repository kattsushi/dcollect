// Set up simple selectors
const loading = (state: any) => state.auth.loading;
const todos = (state: any) => state.auth.todos;
const errorMessage = (state: any) => state.auth.errorMessage;

// Export as group for easier import in components
export const todoSelectors = { loading, todos, errorMessage };
