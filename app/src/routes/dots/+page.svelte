<script>

import DotsComponent from '../../components/dots.svelte';
export let data;

</script>

<svelte:head>

  <!-- HTML Meta Tags -->
  <title>Yasser B. Lebon Dots</title>
  <meta name="description" content="Yasser B. Lebon connecting the dots for a story">

</svelte:head>

{#each data.dots as dots}
  <DotsComponent dots={dots}/>
{/each}