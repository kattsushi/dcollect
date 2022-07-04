const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png","manifest.json","robots.txt","svelte-welcome.png","svelte-welcome.webp","service-worker.js"]),
	mimeTypes: {".png":"image/png",".json":"application/json",".txt":"text/plain",".webp":"image/webp"},
	_: {
		entry: {"file":"start-5fd2822d.js","js":["start-5fd2822d.js","chunks/index-9f689386.js","chunks/index-ae227432.js","chunks/singletons-d1fb5791.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js'))
		],
		routes: [
			{
				type: 'page',
				id: "entity@entity",
				pattern: /^\/entity\/?$/,
				names: [],
				types: [],
				path: "/entity",
				shadow: null,
				a: [2,3],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
