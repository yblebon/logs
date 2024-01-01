import {getData} from '$lib/dataloader.js';


/** @type {import('./$types').LayoutLoad} */
export const load = () => {
  
  let dots = getData(function(ele){
    return ele["type"] == "dots";
    
  })

  return {
    dots: dots
  }
}