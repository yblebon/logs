<script>
import { base } from "$app/paths";
export let tags=[];

</script>

<div class="mx-auto mt-4 " style="max-width: 540px;">

<div class="container text-center">
  <div class="row row-cols-6">

{#each tags as tag}
<div class="col bg-success-subtle border border-secondary">
 <a href="{base}/search/tag_{tag}">

  <button type="button" class="btn me-1 mb-1"
        style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
  {tag}
</button>
</a>
</div>
{/each}

</div>
</div>
</div>
