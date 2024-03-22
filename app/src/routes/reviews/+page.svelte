<script>



import ReviewComponent from '../../components/review.svelte';
export let data;

    

</script>

<svelte:head>

  <!-- HTML Meta Tags -->
  <title>Yasser B. Lebon Reviews</title>
  <meta name="description" content="Yasser B. Lebon review records">

</svelte:head>


{#each data.reviews as review}
  <ReviewComponent review={review}/>
{/each}
