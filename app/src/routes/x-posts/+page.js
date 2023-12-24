import xposts from '$lib/data/x-posts.json';
import videos from '$lib/data/videos.json';
import articles from '$lib/data/articles.json';
import podcasts from '$lib/data/podcasts.json';


export const load = () => {

  return {
    xPosts: xposts,
    videos: videos,
    articles: articles,
    podcasts: podcasts
  }
}