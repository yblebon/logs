import podcasts from '$lib/data/podcasts.json';

/** @type {import('./$types').LayoutLoad} */
export const load = () => {

  return {
    podcasts: podcasts
  }
}