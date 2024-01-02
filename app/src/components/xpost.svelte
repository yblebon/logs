<script>
	export let xpost;
	const filebaseBase = "https://ipfs.filebase.io/ipfs";
	
	const tags = ["primary", "secondary", "success", "danger", "warning", "info", "light"];


</script>

<div class="card me-4 ms-4 mt-4" >

<div class="card-header text-wrap text-bg-success">

     {#if xpost.tags !== undefined }
     
            {#each xpost.tags as tag}
          <span class="me-2 badge float-end ">{tag}</span>
{/each}
           

     
     {:else}
     
     
     {/if}
     

</div>

  {#if xpost.src == "filebase"}
	  <img src="{filebaseBase}/{xpost.id}" class="card-img-top rounded-0">
{:else}
	<img src="{xpost.src}" class="card-img-top">
{/if}

   <div class="card-body bg-light">
     <p class="card-text">

       {#if xpost.upload_date !== undefined}
	  <span class="me-2 badge text-bg-secondary">{xpost.upload_date}</span>
{/if}
     </p>    
 
     
       </div>

</div>