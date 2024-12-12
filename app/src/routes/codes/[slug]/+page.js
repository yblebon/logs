import { getData } from "$lib/dataloader.js";

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  let data = getData();
  let card = data
    .filter((el) => el["section"] == "card")
    .find((element) => params.slug == element.uid);
  console.log(card);

  return {
    card: card,
  };
}

/** @type {import('./$types').EntryGenerator} */
export function entries() {
  let data = getData();
  let slugList = data
    .filter((el) => el["section"] == "card")
    .map((x) => {
      return { slug: x.uid.toString() };
    });

  return slugList;
}
