<script>
    import { onMount } from "svelte";
    import { base } from "$app/paths";
    import './../styles/main.css';
    export let card;
  </script>

<style>
  @font-face {
  font-family: 'Outfit Variable';
  font-style: normal;
  font-display: swap;
  font-weight: 100 900;
  src: url(https://cdn.jsdelivr.net/fontsource/fonts/outfit:vf@latest/latin-wght-normal.woff2) format('woff2-variations');
  unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;
}

.outfit-variable {
        font-family: 'Outfit Variable'
    }

</style>
  
  <div class="card shadow-sm mx-auto rounded-3 border-dark mt-4 h-100" style="max-width: 540px;">
    <div class="card-header text-bg-dark">
     <div>
      <span class="outfit-variable me-2 fw-bolder fs-6 text-lowercase text-wrap float-start"
        >{card.title}</span
      >
     </div>
    </div>
  
    <div class="card-body">
     <figure>
      {#if card.hasOwnProperty("tags") }
          {#each card.tags as tag}
            <span class="mx-2 mt-0 badge bg-info text-dark float-start">{tag}</span>
          {/each}
        {/if}

      <blockquote class="blockquote ps-2 pt-0">
        <p class="quicksand-400 fs-6">{card.text}</p>
      </blockquote>
      {#if card.hasOwnProperty("source")}
        <figcaption class="blockquote-footer ps-2">
          <cite class="text-capitalize" title="Source Title"
            >{card.source}</cite
          >
        </figcaption>
      {/if}
     </figure>
  
    {#if card.image !== undefined}
      <img src={card.image} class="card-img-top" />
    {/if}
  
      {#if card.hasOwnProperty("youtube")}
        <div class="ratio ratio-16x9">
          <iframe src="{card.youtube}" title="YouTube video" allowfullscreen></iframe>
        </div>
      {/if}
  
      {#if card.hasOwnProperty("code")}
        <script src={card.code}></script>
      {/if}
     </div>  
      <div class="card-footer">
        {#if card.hasOwnProperty("upload_date") }
          <span class="me-2 badge text-bg-secondary float-start">{card.upload_date}</span>
        {/if}
  
        <a
          href="{base}/card/{card.uid}"
          class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
          >link</a
        >
  
      </div>
  </div>
  
