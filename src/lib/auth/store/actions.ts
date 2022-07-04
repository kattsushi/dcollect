import { goto } from '$app/navigation';
import { decryptData } from '$lib/gun-db/crypto';
import { gun, user } from '$lib/gun-db/gun';
import { handleAuthResponse } from '$lib/gun-db/helpers';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createUser } from '../services/user';

const setCurrentUser = (getuser: Function) => {
	gun.get(user?.is?.epub).once(async (_user) => {
		console.log('setCurrentUser', _user);
		const user = await decryptData(_user?.data);
		getuser(user);
	});
};

interface AuthPayload {
	username: string;
	email: string;
	password: string;
	option?: string;
}

export const login = createAsyncThunk(
	'auth/login',
	async ({ username, email, password, option }: AuthPayload, thunkAPI) => {
		return new Promise((resolve, reject) => {
			user.auth(email, password, async (response: any) => {
				const res: string = handleAuthResponse(response);
				if (res !== 'errors') {
					option === 'create-user'
						? await createUser(username, email)
						: setCurrentUser((user: any) => {
								resolve(response);
						  });
					goto(`/admin/dashboard`, { replaceState: true });
				} else {
					reject(res);
				}
			});
		});
	}
);

export const register = createAsyncThunk(
	'auth/register',
	async ({ username, email, password }: AuthPayload, { dispatch }) => {
		return new Promise((resolve, reject) => {
			user.create(email, password, (response: any) => {
				const res: string = handleAuthResponse(response);
				if (res !== 'error') {
					resolve(response);
					dispatch(login({ username, email, password, option: 'create-user' }));
				} else {
					reject(response);
				}
			});
		});
	}
);
