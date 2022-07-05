import { USERS } from '$lib/entity/entities.const';
import { decryptData, encryptData } from '$lib/gun-db/crypto';
import { gun, user } from '$lib/gun-db/gun';

export const generateGenericUserData = (date: any, username: string, email: string) => {
	return {
		followers: [],
		followed: [],
		books: {},
		photo: `https://avatars.dicebear.com/api/avataaars/${username}.svg`,
		email,
		createdAt: date,
		updatedAt: date
	};
};

export const createUser = async (username: string, email: string) => {
	return new Promise(async (resolve, reject) => {
		const newUserId = user.is.epub;
		const genericUserData = generateGenericUserData(new Date().getTime(), username, email);
		const userData = await encryptData({
			uuid: newUserId,
			username,
			...genericUserData
		});
		const newUser = gun.get(newUserId).put({
			data: userData
		});

		newUser.once(async (_user) => {
			const user = await decryptData(_user?.data);
			resolve(user);
		});

		gun.get(USERS).set(newUser);
	});
};
