import {getData} from '$lib/dataloader.js';

/** @type {import('./$types').LayoutLoad} */
export function load() {

  let data = getData();

  const highlights = data.filter((p) => p["highlight"] == true).reverse();
  
  return {
    dataList: data,
    highlights: highlights
  };
}