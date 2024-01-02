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
    xposts[i]['type'] = "xpost";
    dataList.push(xposts[i]);
}

for (let i = 0; i < videos.length; i++)
{
    videos[i]['type'] = "video";
    
    if (videos[i]['src'] == "filebase"){
      let id = videos[i]['id'];
      videos[i]["url"] = filebaseBase + "/" + id;
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
    podcasts[i]['type'] = "podcast";
    dataList.push(podcasts[i]);
}

for (let i = 0; i < articles.length; i++) 
{
    articles[i]['type'] = "article";
    dataList.push(articles[i]);
}

for (let i = 0; i < dots.length; i++) 
{
      dots[i]['type'] = "dots";
      dataList.push(dots[i]);
}

for (let i = 0; i < dataList.length; i++) 
{

}



dataList = dataList.sort(sortByDate).reverse();

dataStore = readonly(writable(dataList))

}


