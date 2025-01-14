import {getData, getPageSize, getTags} from '$lib/dataloader.js';


/** @type {import('./$types').PageLoad} */
export function load({ params }) {

  let data = getData();
  let pageSize = getPageSize();
  let cards = [];
  let slugId;
  if (params.slug.startsWith("page_")) { 
     slugId = params.slug.split("_")[1];  
     cards = data.filter((el) => el["section"] == "card").slice((slugId-1) * pageSize, (slugId) * pageSize);
  }
  else if (params.slug.startsWith("tag_")) {
   slugId = params.slug.split("_")[1];
   cards = data.filter((el) => ( el.hasOwnProperty("tags") ) && (el["tags"].indexOf(slugId) !== -1) );
  }

  let highlights = data.filter((p) => p["highlight"] == true);

  return {
    cards: cards,
    blink: slugId,
    highlights: highlights
  }
}

/** @type {import('./$types').EntryGenerator} */
export function entries() {
  let data = getData();
  let pageSize = getPageSize();
  let size = data.filter((el) => el["section"] == "card").length;
  let slugList = [];

  for (var i = 1; i <= Math.ceil(size/pageSize); i++) {
     slugList.push({ "slug": "page_"+i});
  }

  let tagList =  getTags();
  for (var i = 0; i <= tagList.length; i++) {
     slugList.push({ "slug": "tag_"+tagList[i]});
  }

  return slugList;
}
