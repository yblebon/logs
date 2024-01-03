<script>
   import DotsComponent from '../../../components/dots.svelte';
   /** @type {import('./$types').PageData} */
   export let data;
   const filebaseBase = "https://ipfs.filebase.io/ipfs";
   let og = {};
   og["title"] = data.dots.title;
   og["description"] = data.dots.title;
   og["domain"] = "yblebon.github.io";
   og["url"] = "https://yblebon.github.io/logs/dots/"+data.dots.uid;
   

   if (data.dots.poster != undefined ) {
        og["image"] = "https://ipfs.filebase.io/ipfs/"+data.dots.poster;
    }


   
</script>

<svelte:head>

  <!-- HTML Meta Tags -->
  <title>{data.dots.title}</title>
  <meta name="description" content="">


  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary">
  <meta property="twitter:domain" content="{og.domain}">
  <meta property="twitter:url" content="{og.url}">
  <meta name="twitter:title" content="{og.title}">
  <meta name="twitter:description" content="{og.description}">
  <meta name="twitter:image" content="{og.image}">
  <meta name="twitter:creator" content="@YasserLebon"/>

        

</svelte:head>


<DotsComponent dots={data.dots}/>