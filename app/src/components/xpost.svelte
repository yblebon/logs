<script>
	export let xpost;
	const filebaseBase = "https://ipfs.filebase.io/ipfs";


</script>

<div class="card me-4 ms-4 mt-4" >

  {#if xpost.src == "filebase"}
	  <img src="{filebaseBase}/{xpost.id}" class="card-img-top">
{:else}
	<img src="{xpost.src}" class="card-img-top">
{/if}

   <div class="card-body bg-light">
     <p class="card-text">

     {#if xpost.tags !== null }
       {#each xpost.tags as tag}
          <span class="me-2 rounded-pill badge bg-dark">{tag}</span>
{/each}
           
     
     {:else}
     
     
     {/if}
     
       {#if xpost.upload_date !== undefined}
       <br />
	  <span class="me-2 badge text-bg-secondary">{xpost.upload_date}</span>
{/if}
     </p>    
 
     
       </div>

</div>