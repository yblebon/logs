<script>

import ImageComponent from '../../components/image.svelte';
export let data;

</script>

{#each data.images as image}
  <ImageComponent image={image}/>
{/each}

