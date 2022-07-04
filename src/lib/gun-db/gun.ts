import Gun from 'gun/gun';
import 'gun/sea';
import 'gun/axe';

import { variables } from '$lib/variables';

const gun = Gun([variables.gun.relayPeer]);
const user = gun.user().recall({ sessionStorage: true });

Gun.on('opt', function (ctx: any) {
	if (ctx.once) {
		return;
	}
	ctx.on('out', (msg: any) => {
		const to: any = this.to;
		// Adds headers for put
		msg.headers = {
			token: variables.gun.token
		};
		to.next(msg); // pass to next middleware
	});
});

export { gun, user };
