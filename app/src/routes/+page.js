import xposts from '$lib/data/x-posts.json';
import videos from '$lib/data/videos.json';
import articles from '$lib/data/articles.json';
import podcasts from '$lib/data/podcasts.json';

function sortFunction(a,b){
    let dateA = new Date(a.upload_date);
    let dateB = new Date(b.upload_date);
    return dateA > dateB ? 1 : -1;  
}; 

/** @type {import('./$types').LayoutLoad} */
export function load() {
  
  let dataList = [];

for (let i = 0; i < xposts.length; i++) 
{
    if (xposts[i].upload_date != null){
        xposts[i]['type'] = "xpost";
        dataList.push(xposts[i]);
    }
}

for (let i = 0; i < videos.length; i++) 
{
    if (videos[i].upload_date != null){
        videos[i]['type'] = "video";
        dataList.push(videos[i]);
    }
}

for (let i = 0; i < podcasts.length; i++) 
{
    if (podcasts[i].upload_date != null){
        podcasts[i]['type'] = "podcast";
        dataList.push(podcasts[i]);
    }
}

for (let i = 0; i < articles.length; i++) 
{
    if (articles[i].upload_date != null){
        articles[i]['type'] = "article";
        dataList.push(articles[i]);
    }
}

dataList = dataList.sort(sortFunction);
  
  return {
    dataList: dataList
  };
}