<script>

    import CardComponent from '../../components/card.svelte';
    
    export let data;
    
    </script>
    
    <svelte:head>
    
      <!-- HTML Meta Tags -->
      <title>Yasser B. Lebon Cards</title>
      <meta name="description" content="Yasser B. Lebon card records">
    
    </svelte:head>
    
    {#each data.cards as card}
      <CardComponent card={card}/>
    {/each}
    
    
    