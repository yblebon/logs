import {getData, getPageSize} from '$lib/dataloader.js';

/** @type {import('./$types').PageLoad} */
export function load() {

  let pageSize = getPageSize();
  let data = getData();

  const highlights = data.filter((p) => p["highlight"] == true).reverse();
  const cards = data.filter((el) => el["section"] == "card").slice(0, pageSize);

  return {
    dataList: cards,
    highlights: highlights
  };
}
