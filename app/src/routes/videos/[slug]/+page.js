import videos from '$lib/data/videos.json';

export const load = ({params}) => {
  console.log(params.slug);
  let video =  videos[params.slug];
  
  return {
    video: video
  }
}