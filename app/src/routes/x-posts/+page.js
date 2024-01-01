import {getData} from '$lib/dataloader.js';


/** @type {import('./$types').LayoutLoad} */
export const load = () => {
  
  let xPosts = getData(function(ele){
    return ele["type"] == "xpost";
    
  })

  return {
    xPosts: xPosts
  }
}