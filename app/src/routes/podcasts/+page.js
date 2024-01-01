import {getData} from '$lib/dataloader.js';


/** @type {import('./$types').LayoutLoad} */
export const load = () => {
  
  let podcasts = getData(function(ele){
    return ele["type"] == "podcast";
    
  })

  return {
    podcasts: podcasts
  }
}