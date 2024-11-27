<script>
  import { base } from "$app/paths";
  export let image;
  const filebaseBase = "https://ipfs.filebase.io/ipfs";

  const tags = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
  ];
</script>

<div class="card mx-auto border-info mt-4" style="max-width: 540px;">
  <div class="card-header text-wrap text-bg-info">
    {#if image.tags !== undefined}
      {#each image.tags as tag}
        <span class="me-2 badge float-end">{tag}</span>
      {/each}
    {:else}{/if}
  </div>

  <div class="card-body bg-light">
    <p class="card-text">
      {#if image.event_date !== undefined}
        <span class="me-2 badge text-bg-secondary">{image.event_date}</span>
      {/if}

      <a
        href="{base}/images/{image.uid}"
        class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
        >link</a
      >
    </p>
  </div>
</div>
