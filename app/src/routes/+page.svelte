<script>
  import XpostComponent from "../components/xpost.svelte";
  import VideoComponent from "../components/video.svelte";
  import ArticleComponent from "../components/article.svelte";
  import PodcastComponent from "../components/podcast.svelte";
  import DotsComponent from "../components/dots.svelte";
  import ImageComponent from "../components/image.svelte";

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

{#each data.dataList as content}
  {#if content.section == "podcast"}
    <PodcastComponent podcast={content} />
  {/if}
{/each}
