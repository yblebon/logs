import videos from '$lib/data/videos.json';


/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	console.log(params)
	let video = videos[params.slug];
	

		return {
			video: video
		}
	
}

/** @type {import('./$types').EntryGenerator} */
export function entries() {
	
	let slugList = Array.apply(null, Array(videos.length))
    .map(function (y, i) { 
        return {"slug": i.toString()};
     });
     
     console.log(slugList);
    
    
	return slugList;
}
