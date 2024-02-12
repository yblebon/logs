<script>
   import ProjectComponent from '../../../components/project.svelte';
   /** @type {import('./$types').PageData} */
   export let data;
   const filebaseBase = "https://ipfs.filebase.io/ipfs";
   let og = {};
   og["title"] = data.project.title;
   og["description"] = data.project.title;
   og["domain"] = "yblebon.github.io";
   og["url"] = "https://yblebon.github.io/logs/projects/"+data.project.uid;
   
   if (data.project.poster !== undefined){
        og["image"] = data.project.poster;
   }

   



   
</script>

<svelte:head>

  <!-- HTML Meta Tags -->
  <title>{data.project.title}</title>
  <meta name="description" content="{data.project.description}">


  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary">
  <meta property="twitter:domain" content="{og.domain}">
  <meta property="twitter:url" content="{og.url}">
  <meta name="twitter:title" content="{og.title}">
  <meta name="twitter:description" content="{og.description}">
  <meta name="twitter:image" content="{og.image}">
  <meta name="twitter:creator" content="@YasserLebon"/>

        

</svelte:head>


<ProjectComponent project={data.project}/>

