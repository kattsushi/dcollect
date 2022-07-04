import { USERS } from '$lib/entity/entities.const';
import { encryptData } from '$lib/gun-db/crypto';
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
	const newUserId = user.is.epub;

	const genericUserData = generateGenericUserData(new Date().getTime(), username, email);

	console.log('before encryptData', {
		uuid: newUserId,
		username,
		...genericUserData
	});
	const userData = await encryptData({
		uuid: newUserId,
		username,
		...genericUserData
	});
	const newUser = gun.get(newUserId).put({
		data: userData
	});

	newUser.once(async (_user) => {
		console.log('createUser', _user);
	});

	gun.get(USERS).set(newUser);
};
