<script>
    import CardComponent from '../../../components/card.svelte';
    /** @type {import('./$types').PageData} */
    export let data;;
    let og = {};
    og["title"] = data.card.title;
    og["description"] = data.card.text;
    og["domain"] = "yblebon.github.io";
    og["card"] = "summary_large_image";
    og["url"] = "https://yblebon.github.io/logs/cards/"+data.card.uid
    og["image"] = "https://xenogeneic-cyan-boar.myfilebase.com/ipfs/QmQCcGKUCYm56duhMvUS2S9CKfFmLi2bcFTWYmRDw2FLvC";
 </script>
 
 <svelte:head>
 
   <!-- HTML Meta Tags -->
   <title>{data.card.title}</title>
   <meta name="description" content="{data.card.text}">
 

   <!-- Twitter Meta Tags -->
   <meta name="twitter:card" content="{og.card}">
   <meta property="twitter:domain" content="{og.domain}">
   <meta property="twitter:url" content="{og.url}">
   <meta name="twitter:title" content="{og.title}">
   <meta name="twitter:description" content="{og.description}">
   <meta name="twitter:image" content="{og.image}">
   <meta name="twitter:creator" content="@YasserLebon"/>
 
         
 </svelte:head>
 
 
 <CardComponent card={data.card}/>