<script>

import PodcastComponent from '../../components/podcast.svelte';
export let data;

</script>

<svelte:head>

  <!-- HTML Meta Tags -->
  <title>Yasser B. Lebon Podcasts</title>
  <meta name="description" content="Yasser B. Lebon podcast records">

</svelte:head>


{#each data.podcasts as podcast}
  <PodcastComponent podcast={podcast}/>
{/each}


