<script>
   import Xpostcomponent from '../../../components/xpost.svelte';
   /** @type {import('./$types').PageData} */
   export let data;
   const filebaseBase = "https://ipfs.filebase.io/ipfs";
   let og = {};
   og["title"] = data.xpost.tags.join(" ");
   og["description"] = data.xpost.title;
   og["domain"] = "yblebon.github.io";
   og["url"] = "https://yblebon.github.io/logs/xposts/"+data.xpost.uid;
   
   if (data.xpost.poster !== undefined){
        og["image"] = data.xpost.poster;
   }

   



   
</script>

<svelte:head>

  <!-- HTML Meta Tags -->
  <title>{data.xpost.title}</title>
  <meta name="description" content="{data.xpost.title}">


  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary">
  <meta property="twitter:domain" content="{og.domain}">
  <meta property="twitter:url" content="{og.url}">
  <meta name="twitter:title" content="{og.title}">
  <meta name="twitter:description" content="{og.description}">
  <meta name="twitter:image" content="{og.image}">
  <meta name="twitter:creator" content="@YasserLebon"/>

        

</svelte:head>


<Xpostcomponent xpost={data.xpost}/>

