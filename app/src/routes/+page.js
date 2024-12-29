import {getData, getPageSize} from '$lib/dataloader.js';

/** @type {import('./$types').LayoutLoad} */
export function load() {

  let data = getData();
  let pageSize = getPageSize();

  const highlights = data.filter((p) => p["highlight"] == true).slice(0, pageSize).reverse();

  return {
    dataList: data,
    highlights: highlights
  };
}
