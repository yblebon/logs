<script>
    import { base } from "$app/paths";
    import {getData, getPageSize, getCardsTotal, getTags} from '$lib/dataloader.js';
    import CardComponent from '../../../components/card.svelte';
    import CardNavComponent from '../../../components/card_nav.svelte';
    import TagsComponent from '../../../components/tags.svelte';
    
    export let data;
    
    </script>
    
    <svelte:head>
    
      <!-- HTML Meta Tags -->
      <title>Yasser B. Lebon Cards</title>
      <meta name="description" content="Yasser B. Lebon card records">
    
    </svelte:head>
    
    <TagsComponent tags={getTags()} />
    <CardNavComponent size={Math.ceil(getCardsTotal()/getPageSize())} />

    {#each data.cards as card}
      <CardComponent card={card}/>
    {/each}
    
    
    
