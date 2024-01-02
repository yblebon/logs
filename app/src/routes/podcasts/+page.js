import {getData} from '$lib/dataloader.js';


/** @type {import('./$types').LayoutLoad} */
export const load = () => {
  
   let data = getData();
  let podcasts = data.filter((el) => el["type"] == "podcast");

  return {
    podcasts: podcasts
  }
}