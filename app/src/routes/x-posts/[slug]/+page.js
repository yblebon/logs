import {getData} from '$lib/dataloader.js';


/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    let data = getData();
    let xpost= data.filter((el) => el["section"] == "xpost").find((element) => (params.slug == element.uid));
	

		return {
			xpost: xpost
		}
	
}

/** @type {import('./$types').EntryGenerator} */
export function entries() {
	
  let data = getData();
  let slugList = data.filter((el) => el["section"] == "xpost").map((x) => {
  return { "slug": x.uid.toString()};
});
  
    
  return slugList;
}