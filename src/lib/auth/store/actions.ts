import { goto } from '$app/navigation';
import { decryptData } from '$lib/gun-db/crypto';
import { gun, user } from '$lib/gun-db/gun';
import { handleAuthResponse } from '$lib/gun-db/helpers';
import * as toolkitRaw from '@reduxjs/toolkit';
const { createAsyncThunk } = ((toolkitRaw as any).default ?? toolkitRaw) as typeof toolkitRaw;
import { createUser } from '../services/user';

const setCurrentUser = () => {
	return new Promise(async (resolve, reject) => {
		gun.get(user.is.epub).once(async (_user) => {
			const user = await decryptData(_user?.data);
			resolve(user);
		});
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
				1;
				if (res !== 'error') {
					if (option === 'create-user') {
						const user: any = await createUser(username, email);
						resolve(user);
					} else {
						const user: any = await setCurrentUser();
						resolve(user);
					}
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
