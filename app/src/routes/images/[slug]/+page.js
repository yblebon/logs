import {getData} from '$lib/dataloader.js';


/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    let data = getData();
    let image= data.filter((el) => el["section"] == "image").find((element) => (params.slug == element.uid));
	

		return {
			image: image
		}
	
}

/** @type {import('./$types').EntryGenerator} */
export function entries() {
	
  let data = getData();
  let slugList = data.filter((el) => el["section"] == "image").map((x) => {
  return { "slug": x.uid.toString()};
});
  
    
  return slugList;
}