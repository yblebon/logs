<script>

import XpostComponent from '../components/xpost.svelte';
import VideoComponent from '../components/video.svelte';
import ArticleComponent from '../components/article.svelte';
import PodcastComponent from '../components/podcast.svelte';

export let data;

console.log(data)


</script>

{#each data.dataList.reverse() as content }

{#if content.type == "xpost"}
	
	  <XpostComponent xpost={content}/>
	  
{:else if content.type == "video"}

  <VideoComponent video={content}/>
	
	
{:else if content.type == "podcast"}

  <PodcastComponent podcast={content}/>

{:else if content.type == "article"}

  <ArticleComponent article={content}/>

{:else}

{/if}



{/each}







