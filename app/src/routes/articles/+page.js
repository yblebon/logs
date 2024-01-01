import {getData} from '$lib/dataloader.js';


/** @type {import('./$types').LayoutLoad} */
export const load = () => {
  
  let articles = getData(function(ele){
    return ele["type"] == "article";
    
  })

  return {
    articles: articles
  }
}