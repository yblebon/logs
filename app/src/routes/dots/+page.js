import {getData} from '$lib/dataloader.js';


/** @type {import('./$types').LayoutLoad} */
export const load = () => {
  
  let data = getData();
  let dots = data.filter((el) => el["section"] == "dots");

  return {
    dots: dots
  }
}