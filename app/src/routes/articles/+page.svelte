<script>



import ArticleComponent from '../../components/article.svelte';
export let data;

    

</script>

<svelte:head>

  <!-- HTML Meta Tags -->
  <title>Yasser B. Lebon Articles</title>
  <meta name="description" content="Yasser B. Lebon article records">

</svelte:head>


{#each data.articles as article}
  <ArticleComponent article={article}/>
{/each}
