<script>

import PodcastComponent from '../../components/podcast.svelte';
import HighlightsComponent from '../../components/highlights.svelte';

export let data;

var i = 0, len = data.podcasts.length;
let highlights = [];

while (i < len) {
    let p = data.podcasts[i];
    if (p.hasOwnProperty("highlight") && p["highlight"]==true) {
        highlights.push(p);
    }
    i++;
}

</script>

<svelte:head>

  <!-- HTML Meta Tags -->
  <title>Yasser B. Lebon Podcasts</title>
  <meta name="description" content="Yasser B. Lebon podcast records">

</svelte:head>

<HighlightsComponent highlights={highlights}/>

{#each data.podcasts as podcast}
  <PodcastComponent podcast={podcast}/>
{/each}


