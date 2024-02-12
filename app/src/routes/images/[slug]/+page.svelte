<script>
   import ImageComponent from '../../../components/image.svelte';
   /** @type {import('./$types').PageData} */
   export let data;
   const filebaseBase = "https://ipfs.filebase.io/ipfs";
   let og = {};
   og["title"] = data.image.title;
   og["description"] = data.image.title;
   og["domain"] = "yblebon.github.io";
   og["url"] = "https://yblebon.github.io/logs/images/"+data.image.uid
   og["image"] = data.image.url;

   
</script>

<svelte:head>

  <!-- HTML Meta Tags -->
  <title>{data.image.title}</title>
  <meta name="description" content="{data.image.title}">


  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary">
  <meta property="twitter:domain" content="{og.domain}">
  <meta property="twitter:url" content="{og.url}">
  <meta name="twitter:title" content="{og.title}">
  <meta name="twitter:description" content="{og.description}">
  <meta name="twitter:image" content="{og.image}">
  <meta name="twitter:creator" content="@YasserLebon"/>

        

</svelte:head>


<ImageComponent image={data.image}/>