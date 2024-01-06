<script>
   import PodcastComponent from '../../../components/podcast.svelte';
   /** @type {import('./$types').PageData} */
   export let data;
   const filebaseBase = "https://ipfs.filebase.io/ipfs";
   let og = {};
   og["title"] = data.podcast.title;
   og["description"] = data.podcast.title;
   og["domain"] = "yblebon.github.io";
   og["url"] = "https://yblebon.github.io/logs/podcasts/"+data.podcast.uid
   og["audio"] = data.podcast.url;
   og["image"] = "https://ipfs.filebase.io/ipfs/QmaxYnmU94P9J785MYkm28LpnYX5vtxuSC8tRewDn4qdCW";
   
  
   
   
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


<PodcastComponent podcast={data.podcast}/>