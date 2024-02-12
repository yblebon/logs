  <script>

import XpostComponent from '../../components/xpost.svelte';
export let data;

</script>

<svelte:head>

  <!-- HTML Meta Tags -->
  <title>Yasser B. Lebon X-Posts</title>
  <meta name="description" content="Yasser B. Lebon post records from X">

</svelte:head>



{#each data.xPosts as xpost}
  <XpostComponent xpost={xpost}/>
{/each}



