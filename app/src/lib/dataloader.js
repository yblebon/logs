import { get, writable, readonly } from 'svelte/store';
import {load} from '$lib/dataloader.js';
import {createHash} from '$lib/utils.js';

import xposts from '$lib/data/x-posts.json';
import videos from '$lib/data/videos.json';
import articles from '$lib/data/articles.json';
import podcasts from '$lib/data/podcasts.json';
import dots from '$lib/data/dots.json';

var dataStore = null;
const filebaseBase = "https://ipfs.filebase.io/ipfs";
const youtubeBase = "	https://www.youtube.com/embed"

export function sortByDate(a,b){
    let dateA = new Date(a.upload_date);
    let dateB = new Date(b.upload_date);
    return dateA > dateB ? 1 : -1;  
}; 


export function getData(){
    return get(dataStore);
}; 


export function initStore() {
  
let dataList = [];

for (let i = 0; i < xposts.length; i++) 
{
    xposts[i]['section'] = "xpost";
    dataList.push(xposts[i]);
}

for (let i = 0; i < videos.length; i++)
{
    videos[i]['section'] = "video";
    
    if (videos[i]['src'] == "filebase"){
      let id = videos[i]['id'];
      videos[i]["url"] = filebaseBase + "/" + id;
    }
    else if (videos[i]['src'] == "youtube"){
      let id = videos[i]['id'];
      videos[i]["url"] = youtubeBase + "/" + id;
    }
    else {
      videos[i]["url"] = videos[i]["src"];
    }
    
    let uid = createHash(videos[i]["url"]);
    videos[i]["uid"] = uid;
    
    dataList.push(videos[i]);
}

for (let i = 0; i < podcasts.length; i++) 
{
    podcasts[i]['section'] = "podcast";
    podcasts[i]["url"] = podcasts[i]["src"];
    let uid = createHash(podcasts[i]["url"]);
    podcasts[i]["uid"] = uid;
    dataList.push(podcasts[i]);
}

for (let i = 0; i < articles.length; i++) 
{
    articles[i]['section'] = "article";
        
    let uid = createHash(articles[i]["summary"]);
    articles[i]["uid"] = uid;

    dataList.push(articles[i]);
}

for (let i = 0; i < dots.length; i++) 
{
      dots[i]['section'] = "dots";
      let uid = createHash(dots[i]["poster"]);
      dots[i]["uid"] = uid;
      
      dataList.push(dots[i]);
}

for (let i = 0; i < dataList.length; i++) 
{

}



dataList = dataList.sort(sortByDate).reverse();

dataStore = readonly(writable(dataList))

}


