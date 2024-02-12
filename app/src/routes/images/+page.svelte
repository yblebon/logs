<script>

import ImageComponent from '../../components/image.svelte';
export let data;

</script>

<svelte:head>

  <!-- HTML Meta Tags -->
  <title>Yasser B. Lebon Images</title>
  <meta name="description" content="Yasser B. Lebon image records">

</svelte:head>

{#each data.images as image}
  <ImageComponent image={image}/>
{/each}

