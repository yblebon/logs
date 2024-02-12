import {getData} from '$lib/dataloader.js';


/** @type {import('./$types').LayoutLoad} */
export const load = () => {
  
  let data = getData();
  let projects = data.filter((el) => el["section"] == "project");

  return {
    projects: projects
  }
}