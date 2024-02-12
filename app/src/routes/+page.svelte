<script>

import XpostComponent from '../components/xpost.svelte';
import VideoComponent from '../components/video.svelte';
import ArticleComponent from '../components/article.svelte';
import PodcastComponent from '../components/podcast.svelte';
import DotsComponent from '../components/dots.svelte';
import ImageComponent from '../components/image.svelte';

export let data;



</script>

<svelte:head>

  <!-- HTML Meta Tags -->
  <title>Yasser B. Lebon Logs</title>
  <meta name="description" content="Yasser B. Lebon Logs">

</svelte:head>




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
  
 {:else if content.section == "image"}

  <ImageComponent image={content}/>

{:else}

{/if}



{/each}







