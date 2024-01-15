<script>
   import ArticleComponent from '../../../components/article.svelte';
   /** @type {import('./$types').PageData} */
   export let data;
   const filebaseBase = "https://ipfs.filebase.io/ipfs";
   let og = {};
   og["title"] = data.article.title;
   og["description"] = data.article.title;
   og["domain"] = "yblebon.github.io";
   og["url"] = "https://yblebon.github.io/logs/articles/"+data.article.uid;
   
   if (data.article.poster !== undefined){
        og["image"] = data.article.poster;
   }

   



   
</script>

<svelte:head>

  <!-- HTML Meta Tags -->
  <title>{data.article.title}</title>
  <meta name="description" content="{data.article.title}">


  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary">
  <meta property="twitter:domain" content="{og.domain}">
  <meta property="twitter:url" content="{og.url}">
  <meta name="twitter:title" content="{og.title}">
  <meta name="twitter:description" content="{og.description}">
  <meta name="twitter:image" content="{og.image}">
  <meta name="twitter:creator" content="@YasserLebon"/>

        

</svelte:head>


<ArticleComponent article={data.article}/>

