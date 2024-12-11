import {getData} from '$lib/dataloader.js';


/** @type {import('./$types').LayoutLoad} */
export const load = () => {
  
  let data = getData();
  let cards = data.filter((el) => el["section"] == "card");
  let highlights = data.filter((p) => p["highlight"] == true);

  return {
    cards: cards,
    highlights: highlights
  }
}