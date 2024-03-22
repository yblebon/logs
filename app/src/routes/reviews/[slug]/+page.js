import {getData} from '$lib/dataloader.js';


/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    let data = getData();
    let review = data.filter((el) => el["section"] == "review").find((element) => (params.slug == element.uid));
	

		return {
			review: review
		}
	
}

/** @type {import('./$types').EntryGenerator} */
export function entries() {
	
  let data = getData();
  let slugList = data.filter((el) => el["section"] == "review").map((x) => {
  return { "slug": x.uid.toString()};
});
  
    
  return slugList;
}