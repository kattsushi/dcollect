import Gun from 'gun';
import 'gun/sea.js';
import 'gun/axe.js';
import { variables } from '$lib/variables';

const { pair } = variables.gun;

// const pair: any = await Gun.SEA.pair()
export const encryptData = async (data: any) => {
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
	try {
		const verification = await Gun.SEA.verify(data, pair.pub);
		const decrypted = await Gun.SEA.decrypt(verification, pair);
		return decrypted;
	} catch (err) {
		return null;
	}
};
