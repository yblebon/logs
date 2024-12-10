import {getData} from '$lib/dataloader.js';

/** @type {import('./$types').LayoutLoad} */
export function load() {

  let data = getData();

  let highlights = data.filter((p) => p["highlight"] == true);
  
  return {
    dataList: data,
    highlights: highlights
  };
}