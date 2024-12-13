<script>
    import CardComponent from '../../../components/card.svelte';
    /** @type {import('./$types').PageData} */
    export let data;
    let og = {};
    
    // code title 
    if (data.card.hasOwnProperty("code_title")) {
      og["title"] = data.card.code_title;
    } else {
      og["title"] = data.card.title;
    }

    // code description 
    if (data.card.hasOwnProperty("code_description")) {
      og["description"] = data.card.code_description;
    } else {
      og["description"] = data.card.text;
    }
    
    og["domain"] = "yblebon.github.io";
    og["url"] = "https://yblebon.github.io/logs/cards/"+data.card.uid
    og["audio"] = data.card.url;
    og["image"] = "https://xenogeneic-cyan-boar.myfilebase.com/ipfs/QmdeUdbq7B5mbnvYbXTGxrpB52P7PSEMPXv2yTXV9nkbr6";
    
   
    
    
 </script>
 
 <svelte:head>
 
  <!-- HTML Meta Tags -->
  <title>{data.card.title}</title>
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:creator" content="@YasserLebon" />
  <meta property="og:url" content="{og.url}" />
  <meta property="og:title" content="{og.title}" />
  <meta property="og:description" content="{og.description}" />
  <meta property="og:image" content="{og.image}" />

 </svelte:head>
 
 
 <CardComponent card={data.card}/>