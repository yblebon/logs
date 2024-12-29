<script>
import { base } from "$app/paths";
export let tags=[];

</script>

<div class="mx-auto mt-4 " style="max-width: 540px;">
{#each tags as tag}
 <a href="{base}/search/tag_{tag}">
  <button type="button" class="btn btn-primary me-1 mb-1"
        style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
  {tag}
</button>
</a>
{/each}
</div>
