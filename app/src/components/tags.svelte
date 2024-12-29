<script>

export let tags=[];

</script>

<div class="mx-auto mt-4 " style="max-width: 540px;">
{#each tags as tag}
  <span class="badge text-bg-primary me-2">{tag}</span>
{/each}
</div>
