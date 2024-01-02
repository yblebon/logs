import {getData} from '$lib/dataloader.js';


/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	console.log(params)
	
    let data = getData();
    let video= data.filter((el) => el["type"] == "video").find((element) => (params.slug == element.uid));
	

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
