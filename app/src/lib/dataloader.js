import { get, writable, readonly } from 'svelte/store';
import { load } from '$lib/dataloader.js';
import { createHash } from '$lib/utils.js';

import xposts from '$lib/data/x-posts.json';
import videos from '$lib/data/videos.json';
import articles from '$lib/data/articles.json';
import podcasts from '$lib/data/podcasts.json';
import images from '$lib/data/images.json';
import dots from '$lib/data/dots.json';
import projects from '$lib/data/projects.json';
import reviews from '$lib/data/reviews.json';
import cards from '$lib/data/cards.json';

var dataStore = null;
const filebaseBase = "https://ipfs.filebase.io/ipfs";
const youtubeBase = "	https://www.youtube.com/embed"

export function sortByDate(a, b) {
  let dateA = new Date(a.upload_date);
  let dateB = new Date(b.upload_date);
  return dateA > dateB ? 1 : -1;
};


export function getData() {
  return get(dataStore);
};

export function getCardsTotal() {
  return get(dataStore).length;
};

export function getPageSize() {
  return 10;
};

export function initStore() {

  let dataList = [];

  for (let i = 0; i < xposts.length; i++) {
    xposts[i]['section'] = "xpost";

    if (xposts[i]['src'] == "filebase") {
      let id = xposts[i]['id'];
      xposts[i]["url"] = filebaseBase + "/" + id;
    }
    else {
      xposts[i]["url"] = xposts[i]["src"];
    }

    let uid = createHash(xposts[i]["url"]);
    xposts[i]["uid"] = uid;


    dataList.push(xposts[i]);
  }

  for (let i = 0; i < videos.length; i++) {
    videos[i]['section'] = "video";

    if (videos[i]['src'] == "filebase") {
      let id = videos[i]['id'];
      videos[i]["url"] = filebaseBase + "/" + id;
    }
    else if (videos[i]['src'] == "youtube") {
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


  for (let i = 0; i < images.length; i++) {
    images[i]['section'] = "image";

    if (images[i]['src'] == "filebase") {
      let id = images[i]['id'];
      images[i]["url"] = filebaseBase + "/" + id;
    }
    else {
      images[i]["url"] = videos[i]["src"];
    }

    let uid = createHash(images[i]["url"]);
    images[i]["uid"] = uid;

    dataList.push(images[i]);
  }

  for (let i = 0; i < podcasts.length; i++) {
    podcasts[i]['section'] = "podcast";
    podcasts[i]["url"] = podcasts[i]["src"];
    if (!podcasts[i].hasOwnProperty('uid')) {
      let uid = createHash(podcasts[i]["url"]);
      podcasts[i]["uid"] = uid;
    }
    dataList.push(podcasts[i]);
  }

  for (let i = 0; i < cards.length; i++) {
    cards[i]['section'] = "card";
    cards[i]["url"] = cards[i]["src"];
    if (!cards[i].hasOwnProperty('uid')) {
      let uid = createHash(cards[i]["url"]);
      cards[i]["uid"] = uid;
    }
    dataList.push(cards[i]);
  }

  for (let i = 0; i < articles.length; i++) {
    articles[i]['section'] = "article";

    let uid = createHash(articles[i]["url"]);
    articles[i]["uid"] = uid;

    dataList.push(articles[i]);
  }

  for (let i = 0; i < reviews.length; i++) {
    reviews[i]['section'] = "review";

    let uid = createHash(reviews[i]["url"]);
    reviews[i]["uid"] = uid;

    dataList.push(reviews[i]);
  }

  for (let i = 0; i < projects.length; i++) {
    projects[i]['section'] = "project";

    let uid = createHash(projects[i]["url"]);
    projects[i]["uid"] = uid;

    dataList.push(projects[i]);
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i]['section'] = "dots";
    let uid = createHash(dots[i]["poster"]);
    dots[i]["uid"] = uid;

    dataList.push(dots[i]);
  }

  for (let i = 0; i < dataList.length; i++) {

  }



  dataList = dataList.sort(sortByDate).reverse();

  dataStore = readonly(writable(dataList))

}


