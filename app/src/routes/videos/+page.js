import {getData} from '$lib/dataloader.js';


/** @type {import('./$types').LayoutLoad} */
export const load = () => {
  
  let videos = getData(function(ele){
    return ele["type"] == "video";
    
  })

  return {
    videos: videos
  }
}