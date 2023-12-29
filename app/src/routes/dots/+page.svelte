<script>

import DotsComponent from '../../components/dots.svelte';
export let data;

</script>

{#each data.dots as dots}
  <DotsComponent dots={dots}/>
{/each}