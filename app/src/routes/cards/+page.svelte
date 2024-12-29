<script>
    import {getData, getPageSize} from '$lib/dataloader.js';
    import { base } from "$app/paths";
    import CardComponent from '../../components/card.svelte';
    import CardNavComponent from '../../components/card_nav.svelte';
    
    export let data;

    </script>
    
<svelte:head>
    
      <!-- HTML Meta Tags -->
      <title>Yasser B. Lebon Cards</title>
      <meta name="description" content="Yasser B. Lebon card records">
    
</svelte:head>
    
    <CardNavComponent size={Math.ceil(data.cards.length/getPageSize())} />

    {#each data.cards as card}
      <CardComponent card={card}/>
    {/each}
    
    
    
