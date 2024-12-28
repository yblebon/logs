import {getData} from '$lib/dataloader.js';


/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  
  let data = getData();
  let cards = data.filter((el) => el["section"] == "card").slice((params.slug-1) * 10, (params.slug) * 10);
  let highlights = data.filter((p) => p["highlight"] == true);

  return {
    cards: cards,
    highlights: highlights
  }
}

/** @type {import('./$types').EntryGenerator} */
export function entries() {
  let data = getData();
  let size = data.filter((el) => el["section"] == "card").length;
  let slugEntries = [];
  for (var i = 1; i <= Math.ceil(size/10); i++) {
     slugEntries.push(i);
  }

  let slugList = slugEntries.map((x) => {
  	return { "slug": x.toString()};
  });
  return slugList;
}
