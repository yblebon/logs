import {getData} from '$lib/dataloader.js';

/** @type {import('./$types').LayoutLoad} */
export function load() {

  
  return {
    dataList: getData()
  };
}