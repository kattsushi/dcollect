const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png","manifest.json","robots.txt","svelte-welcome.png","svelte-welcome.webp","service-worker.js"]),
	mimeTypes: {".png":"image/png",".json":"application/json",".txt":"text/plain",".webp":"image/webp"},
	_: {
		entry: {"file":"start-474b9ba2.js","js":["start-474b9ba2.js","chunks/index-7ad9c0e7.js","chunks/index-4a5881e3.js","chunks/singletons-d1fb5791.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js'))
		],
		routes: [
			{
				type: 'page',
				id: "admin/entity",
				pattern: /^\/admin\/entity\/?$/,
				names: [],
				types: [],
				path: "/admin/entity",
				shadow: null,
				a: [0,2,3],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
