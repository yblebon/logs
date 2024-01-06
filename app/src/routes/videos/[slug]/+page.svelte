<script>
   import VideoComponent from '../../../components/video.svelte';
   /** @type {import('./$types').PageData} */
   export let data;
   const filebaseBase = "https://ipfs.filebase.io/ipfs";
   let og = {};
   og["title"] = data.video.title;
   og["description"] = data.video.title;
   og["domain"] = "yblebon.github.io";
   og["url"] = "https://yblebon.github.io/logs/videos/"+data.video.uid
   
   if (data.video.src == "filebase") {
        og["video"] = `${filebaseBase}/${data.video.id}`
   } else {
       og["video"] = data.video.src;
   }
   
   if (data.video.poster == undefined ) {

    }


   
</script>

<svelte:head>

  <!-- HTML Meta Tags -->
  <title>{data.video.title}</title>
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


<VideoComponent video={data.video}/>

