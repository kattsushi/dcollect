// Set up simple selectors
const loading = (state: any) => state.auth.loading;
const currentUser = (state: any) => state.auth.user;
const isLoggedIn = (state: any) => state.auth.isLoggedIn;
const errorMessage = (state: any) => state.auth.errorMessage;

// Export as group for easier import in components
export const authSelectors = { loading, currentUser, errorMessage, isLoggedIn };
