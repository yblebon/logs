<script>

import VideoComponent from '../../components/video.svelte';
export let data;

</script>

<svelte:head>

  <!-- HTML Meta Tags -->
  <title>Yasser B. Lebon Videos</title>
  <meta name="description" content="Yasser B. Lebon video records">

</svelte:head>

{#each data.videos as video}
  <VideoComponent video={video}/>
{/each}

