import videos from '$lib/data/videos.json';


/** @type {import('./$types').LayoutLoad} */
export const load = () => {

  return {
    videos: videos
  }
}