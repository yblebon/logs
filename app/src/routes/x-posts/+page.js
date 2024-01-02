import {getData} from '$lib/dataloader.js';


/** @type {import('./$types').LayoutLoad} */
export const load = () => {
  
  let data = getData();
  let xPosts = data.filter((el) => el["type"] == "xpost");
  
  return {
    xPosts: xPosts
  }
}