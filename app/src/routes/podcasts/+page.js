import {getData} from '$lib/dataloader.js';


/** @type {import('./$types').LayoutLoad} */
export const load = () => {
  
  let data = getData();
  let podcasts = data.filter((el) => el["section"] == "podcast");
  let highlights = data.filter((p) => p["highlight"] == true);

  return {
    podcasts: podcasts,
    highlights: highlights
  }
}