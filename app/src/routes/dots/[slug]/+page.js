import {getData} from '$lib/dataloader.js';


/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    let data = getData();
    let dots= data.filter((el) => el["section"] == "dots").find((element) => (params.slug == element.uid));
	

		return {
			dots: dots
		}
	
}

/** @type {import('./$types').EntryGenerator} */
export function entries() {
	
  let data = getData();
  let slugList = data.filter((el) => el["section"] == "dots").map((x) => {
  return { "slug": x.uid.toString()};
});
  
    
  return slugList;
}