import {getData, getPageSize} from '$lib/dataloader.js';

/** @type {import('./$types').LayoutLoad} */
export function load() {

  let pageSize = getPageSize();
  let data = getData().slice(0, pageSize);

  const highlights = data.filter((p) => p["highlight"] == true).reverse();

  return {
    dataList: data,
    highlights: highlights
  };
}
