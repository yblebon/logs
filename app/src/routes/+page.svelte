<script>
  import {getData, getPageSize, getCardsTotal, getTags, getBlink} from '$lib/dataloader.js';

  import CardComponent from "../components/card.svelte";
  import CardNavComponent from '../components/card_nav.svelte';
  import TagsComponent from '../components/tags.svelte';
  import HighlightsComponent from '../components/highlights.svelte';

  export let data;
</script>

<svelte:head>
  <!-- HTML Meta Tags -->
  <title>Yasser B. Lebon Logs</title>
  <meta
    name="description"
    content="Yasser B. Lebon Logs personal blog, vlog, journal and containing rrecords of events"
  />
</svelte:head>

<TagsComponent tags={getTags()} blink={getBlink()}/>
<CardNavComponent size={Math.ceil(getCardsTotal()/getPageSize())} />

<HighlightsComponent highlights={data.highlights}/>

{#each data.dataList as content}
  {#if content.section == "card"}
    <CardComponent card={content} />
  {/if}
{/each}
