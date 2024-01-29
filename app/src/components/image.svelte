<script>
	export let image;
	const filebaseBase = "https://ipfs.filebase.io/ipfs";
	
	const tags = ["primary", "secondary", "success", "danger", "warning", "info", "light"];


</script>

<div class="card me-4 ms-4 mt-4" >

<div class="card-header text-wrap text-bg-success">

     {#if image.tags !== undefined }
     
            {#each image.tags as tag}
          <span class="me-2 badge float-end ">{tag}</span>
{/each}
           

     
     {:else}
     
     
     {/if}
     

</div>

   <img src="{image.url}" class="card-img-top">

   <div class="card-body bg-light">
     <p class="card-text">

       {#if image.upload_date !== undefined}
	  <span class="me-2 badge text-bg-secondary">{image.event_date}</span>
{/if}
     </p>    
 
     
       </div>

</div>