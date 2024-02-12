import {getData} from '$lib/dataloader.js';


/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    let data = getData();
    let project= data.filter((el) => el["section"] == "project").find((element) => (params.slug == element.uid));
	

		return {
			project: project
		}
	
}

/** @type {import('./$types').EntryGenerator} */
export function entries() {
	
  let data = getData();
  let slugList = data.filter((el) => el["section"] == "project").map((x) => {
  return { "slug": x.uid.toString()};
});
  
    
  return slugList;
}