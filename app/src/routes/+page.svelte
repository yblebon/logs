<script>

import XpostComponent from '../components/xpost.svelte';
import VideoComponent from '../components/video.svelte';
import ArticleComponent from '../components/article.svelte';
import PodcastComponent from '../components/podcast.svelte';
import DotsComponent from '../components/dots.svelte';

export let data;



</script>



{#each data.dataList as content }

{#if content.section == "xpost"}
	
	  <XpostComponent xpost={content}/>
	  
{:else if content.section == "video"}

  <VideoComponent video={content}/>
	
	
{:else if content.section == "podcast"}

  <PodcastComponent podcast={content}/>

{:else if content.section == "article"}

  <ArticleComponent article={content}/>
  
 {:else if content.section == "dots"}

  <DotsComponent dots={content}/>

{:else}

{/if}



{/each}







