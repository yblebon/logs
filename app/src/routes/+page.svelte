<script>
  import PodcastComponent from "../components/podcast.svelte";
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

<HighlightsComponent highlights={data.highlights}/>

{#each data.dataList as content}
  {#if content.section == "podcast"}
    <PodcastComponent podcast={content} />
  {/if}
{/each}
