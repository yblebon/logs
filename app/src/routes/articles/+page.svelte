<script>

import ArticleComponent from '../../components/article.svelte';
export let data;

</script>

{#each data.articles as article}
  <ArticleComponent article={article}/>
{/each}
