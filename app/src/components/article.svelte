<script>
  import { onMount } from "svelte";
  import { base } from "$app/paths";
  import { getGif } from "$lib/utils.js";

  export let article;
</script>

<div class="card mx-auto border-dark mt-4" style="max-width: 540px;">
  <div class="card-header text-bg-dark">
    <span class="me-2 badge text-lowercase text-wrap float-end">
      {article.title}
    </span>
  </div>

  <div class="row g-0">
    {#if article.poster !== undefined}
      <div class="col-md-4">
        <img src={article.poster} class="img-fluid" alt="..." />
      </div>
    {/if}

    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{article.title}</h5>
        <p class="card-text">
          {article.summary}
          <small class="text-body-secondary text-capitalize"
            >someone @ {article.source}</small
          >
        </p>
        <p class="card-text">
          <a
            href="{base}/articles/{article.uid}"
            class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >link</a
          >

          {#if article.url !== undefined}
            <a href={article.url} class="btn btn-outline-secondary float-end">
              <span>
                <i class="gg-readme"></i>
              </span>
            </a>
          {/if}
        </p>
      </div>
    </div>
  </div>
</div>
