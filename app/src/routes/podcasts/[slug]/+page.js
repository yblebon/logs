import {getData} from '$lib/dataloader.js';


/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    let data = getData();
    let podcast= data.filter((el) => el["section"] == "podcast").find((element) => (params.slug == element.uid));
	

		return {
			podcast: podcast
		}
	
}

/** @type {import('./$types').EntryGenerator} */
export function entries() {
	
  let data = getData();
  let slugList = data.filter((el) => el["section"] == "podcast").map((x) => {
  return { "slug": x.uid.toString()};
});
  
    
  return slugList;
}