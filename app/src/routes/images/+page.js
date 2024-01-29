import {getData} from '$lib/dataloader.js';


/** @type {import('./$types').LayoutLoad} */
export const load = () => {
  
   let data = getData();
  let images = data.filter((el) => el["section"] == "image");

  return {
    images: images
  }
}