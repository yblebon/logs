<script>
  import { onMount } from "svelte";
  import { base } from "$app/paths";
  import { getGif } from "$lib/utils.js";

  export let review;
</script>

<div class="card mx-auto border-dark mt-4" style="max-width: 540px;">
  <div class="card-header text-bg-dark">
    <span class="me-2 badge text-lowercase text-wrap float-end">
      {review.title}
    </span>
  </div>

  <div class="row g-0">
    {#if review.poster !== undefined}
      <div class="col-md-4">
        <img src={review.poster} class="img-fluid" alt="..." />
      </div>
    {/if}

    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{review.title}</h5>
        <p class="card-text">{review.summary}</p>
        <p class="card-text">
          <a
            href="{base}/reviews/{review.uid}"
            class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >link</a
          >

          {#if review.url !== undefined}
            <a href={review.url} class="btn btn-outline-secondary float-end">
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
