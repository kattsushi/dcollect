import Gun from 'gun/gun';
import 'gun/sea';
import 'gun/axe';
import { variables } from '$lib/variables';

const { pair } = variables.gun;
export const encryptData = async (data: any) => {
	console.log('encryptData', pair);
	try {
		const enc = await Gun.SEA.encrypt(data, pair);
		const signedData = await Gun.SEA.sign(enc, pair);
		return signedData;
	} catch (err) {
		console.log(err);
		return null;
	}
};

export const decryptData = async (data: any) => {
	console.log('decryptData', pair);
	try {
		const verification = await Gun.SEA.verify(data, pair.pub);
		const decrypted = await Gun.SEA.decrypt(verification, pair);
		return decrypted;
	} catch (err) {
		console.log('Error', err);
		return null;
	}
};
