import {getData} from '$lib/dataloader.js';


/** @type {import('./$types').LayoutLoad} */
export const load = () => {
  
  let data = getData();
  let videos = data.filter((el) => el["type"] == "video");
  
  return {
    videos: videos
  }
}