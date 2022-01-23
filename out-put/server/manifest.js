export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","fonts/DroidSansMono.ttf","index.bakup"]),
	_: {
		mime: {".png":"image/png",".ttf":"font/ttf"},
		entry: {"file":"start-7930736e.js","js":["start-7930736e.js","chunks/vendor-728620aa.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js')
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/about\/?$/,
				params: null,
				path: "/about",
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/tools\/?$/,
				params: null,
				path: "/tools",
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/tools\/finance\/?$/,
				params: null,
				path: "/tools/finance",
				a: [0,5],
				b: [1]
			}
		]
	}
};
