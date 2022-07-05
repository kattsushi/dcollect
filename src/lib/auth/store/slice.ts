import { goto } from '$app/navigation';
import { user } from '$lib/gun-db/gun';
import * as toolkitRaw from '@reduxjs/toolkit';
const { createSlice } = ((toolkitRaw as any).default ?? toolkitRaw) as typeof toolkitRaw;
import { login } from './actions';

// Define initial state, slice name, and reducer

interface UsersState {
	user: {};
	loading: 'idle' | 'pending' | 'succeeded' | 'failed';
	errorMessage: null | string;
}

const initialState: UsersState = {
	user: {},
	loading: 'idle',
	errorMessage: null
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		loading(state) {
			state.loading = 'succeeded';
		},
		logout(state) {
			user.leave();
			state.loading = 'succeeded';
			state.errorMessage = null;
			state.user = {};
			goto(`/`, { replaceState: true });
		},
		authError(state, action) {
			state.loading = 'failed';
			state.errorMessage = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder.addCase(login.pending, (state) => {
			state.loading = 'pending';
			state.errorMessage = null;
		});

		builder.addCase(login.fulfilled, (state, action) => {
			state.loading = 'succeeded';
			state.errorMessage = null;
			state.user = action.payload;
		});

		builder.addCase(login.rejected, (state, action) => {
			state.loading = 'failed';
			state.errorMessage = action.payload as string;
		});
	}
});

// Export actions
export const { logout, authError, loading } = authSlice.actions;

// Export reducer by default for loading into configureStore
export default authSlice.reducer;
