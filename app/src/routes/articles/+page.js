import {getData} from '$lib/dataloader.js';


/** @type {import('./$types').LayoutLoad} */
export const load = () => {
  
  let data = getData();
  let articles = data.filter((el) => el["type"] == "article");

  return {
    articles: articles
  }
}