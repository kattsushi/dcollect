import Gun from 'gun';
import 'gun/sea.js';
import 'gun/axe.js';

import { variables } from '$lib/variables';

const gun = Gun([variables.gun.relayPeer]);
const user = gun.user().recall({ sessionStorage: true });

gun.on('auth', (ack) => console.log('Authentication was successful: ', ack));

// Gun.on('opt', function (ctx: any) {
// 	if (ctx.once) {
// 		return;
// 	}
// });

export { gun, user };
