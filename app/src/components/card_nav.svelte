<script>
    import { onMount } from "svelte";
    import { base } from "$app/paths";
    export let size=20;
  </script>


<div class="mx-auto mt-4" style="max-width: 540px;">
     <nav aria-label="Page navigation example">
  <ul class="pagination pagination-sm d-flex align-content-start flex-wrap">
    {#each {length: size} as _, search_id}
        <li class="page-item"><a class="page-link" href="{base}/search/{search_id + 1}">{search_id+1}</a></li>
    {/each}
  </ul>
</nav>
</div>
