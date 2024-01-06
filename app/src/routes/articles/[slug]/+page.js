import {getData} from '$lib/dataloader.js';


/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    let data = getData();
    let article= data.filter((el) => el["section"] == "article").find((element) => (params.slug == element.uid));
	

		return {
			article: article
		}
	
}

/** @type {import('./$types').EntryGenerator} */
export function entries() {
	
  let data = getData();
  let slugList = data.filter((el) => el["section"] == "article").map((x) => {
  return { "slug": x.uid.toString()};
});
  
    
  return slugList;
}