import {getData} from '$lib/dataloader.js';


/** @type {import('./$types').LayoutLoad} */
export const load = () => {
  
  let data = getData();
  let reviews = data.filter((el) => el["section"] == "review");

  return {
    reviews: reviews
  }
}