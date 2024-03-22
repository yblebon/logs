<script>
   import ReviewComponent from '../../../components/review.svelte';
   /** @type {import('./$types').PageData} */
   export let data;
   const filebaseBase = "https://ipfs.filebase.io/ipfs";
   let og = {};
   og["title"] = data.review.title;
   og["description"] = data.review.title;
   og["domain"] = "yblebon.github.io";
   og["url"] = "https://yblebon.github.io/logs/reviews/"+data.review.uid;
   
   if (data.review.poster !== undefined){
        og["image"] = data.review.poster;
   }

   



   
</script>

<svelte:head>

  <!-- HTML Meta Tags -->
  <title>{data.review.title}</title>
  <meta name="description" content="{data.review.title}">


  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary">
  <meta property="twitter:domain" content="{og.domain}">
  <meta property="twitter:url" content="{og.url}">
  <meta name="twitter:title" content="{og.title}">
  <meta name="twitter:description" content="{og.description}">
  <meta name="twitter:image" content="{og.image}">
  <meta name="twitter:creator" content="@YasserLebon"/>

        

</svelte:head>


<ReviewComponent review={data.review}/>

