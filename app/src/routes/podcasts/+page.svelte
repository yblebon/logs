<script>

import PodcastComponent from '../../components/podcast.svelte';
export let data;

</script>


{#each data.podcasts as podcast}
  <PodcastComponent podcast={podcast}/>
{/each}


