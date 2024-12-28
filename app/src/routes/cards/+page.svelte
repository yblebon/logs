<script>
    import { base } from "$app/paths";
    import CardComponent from '../../components/card.svelte';
    import CardNavComponent from '../../components/card_nav.svelte';
    
    export let data;
    let size = 20;

    </script>
    
<svelte:head>
    
      <!-- HTML Meta Tags -->
      <title>Yasser B. Lebon Cards</title>
      <meta name="description" content="Yasser B. Lebon card records">
    
</svelte:head>
    
    <CardNavComponent size={Math.ceil(data.cards.length/size)} />

    {#each data.cards as card}
      <CardComponent card={card}/>
    {/each}
    
    
    
