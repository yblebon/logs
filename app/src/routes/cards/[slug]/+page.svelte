<script>
    import CardComponent from '../../../components/card.svelte';
    /** @type {import('./$types').PageData} */
    export let data;
    const filebaseBase = "https://ipfs.filebase.io/ipfs";
    let og = {};
    og["title"] = data.card.title;
    og["description"] = data.card.title;
    og["domain"] = "yblebon.github.io";
    og["url"] = "https://yblebon.github.io/logs/cards/"+data.card.uid
    og["audio"] = data.card.url;
    og["image"] = "https://ipfs.filebase.io/ipfs/QmaxYnmU94P9J785MYkm28LpnYX5vtxuSC8tRewDn4qdCW";
    
   
    
    
 </script>
 
 <svelte:head>
 
   <!-- HTML Meta Tags -->
   <title>{data.card.title}</title>
   <meta name="description" content="{data.card.title}">
 
 
   <!-- Twitter Meta Tags -->
   <meta name="twitter:card" content="summary">
   <meta property="twitter:domain" content="{og.domain}">
   <meta property="twitter:url" content="{og.url}">
   <meta name="twitter:title" content="{og.title}">
   <meta name="twitter:description" content="{og.description}">
   <meta name="twitter:image" content="{og.image}">
   <meta name="twitter:creator" content="@YasserLebon"/>
 
         
 
 </svelte:head>
 
 
 <CardComponent card={data.card}/>