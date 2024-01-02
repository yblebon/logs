import {getData} from '$lib/dataloader.js';


/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    let data = getData();
    let video= data.filter((el) => el["type"] == "video").find((element) => (params.slug == element.uid));
	

		return {
			video: video
		}
	
}

/** @type {import('./$types').EntryGenerator} */
export function entries() {
	
  let data = getData();
  let slugList = data.filter((el) => el["type"] == "video").map((x) => {
  return { "slug": x.uid.toString()};
});
  
    
  return slugList;
}
