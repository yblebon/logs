  <script>

import XpostComponent from '../../components/xpost.svelte';
export let data;

</script>



{#each data.xPosts as xpost}
  <XpostComponent xpost={xpost}/>
{/each}



