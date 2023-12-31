/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	console.log(params)

		return {
			title: 'Hello world!',
			content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
		};
	
}

/** @type {import('./$types').EntryGenerator} */
export function entries() {
	return [		
	  { slug: 'hello-world' },	
	  { slug: 'another-blog-post' }	
	]
}
