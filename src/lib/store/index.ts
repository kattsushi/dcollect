import * as toolkitRaw from '@reduxjs/toolkit';
const { configureStore } = ((toolkitRaw as any).default ?? toolkitRaw) as typeof toolkitRaw;
import authSlice from '$lib/auth/store';
import enititySlice from '$lib/entity/store';

function svelteStoreEnhancer(createStoreApi: Function): any {
	return function (reducer: any, initialState: RootState) {
		const reduxStore = createStoreApi(reducer, initialState);
		return {
			...reduxStore,
			subscribe(fn: Function) {
				fn(reduxStore.getState());

				return reduxStore.subscribe(() => {
					fn(reduxStore.getState());
				});
			}
		};
	};
}

export const store = configureStore({
	reducer: {
		auth: authSlice,
		entity: enititySlice
	},
	devTools: process.env.NODE_ENV !== 'production',
	enhancers: [svelteStoreEnhancer]
});

export type RootState = ReturnType<typeof store.getState>;

export default store;

export const useSelector = (select: any, onChange: Function) => {
	let currentState: any;

	function handleChange() {
		let nextState = select(store.getState());
		if (nextState !== currentState) {
			currentState = nextState;
			onChange(currentState);
		}
	}

	store.subscribe(handleChange);
	handleChange();
	return currentState;
};
