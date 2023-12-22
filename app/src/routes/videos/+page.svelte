<script>

import VideoComponent from '../../components/video.svelte';
export let data;

</script>

{#each data.videos as video}
  <VideoComponent video={video}/>
{/each}

