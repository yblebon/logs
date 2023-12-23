import xposts from '$lib/data/x-posts.json';

/** @type {import('./$types').LayoutLoad} */
export async function load() {
  
  return {
    xposts: xPosts
  }
}