<script>
	export let xpost;
	import { base } from '$app/paths';
	const filebaseBase = "https://ipfs.filebase.io/ipfs";
	
	const tags = ["primary", "secondary", "success", "danger", "warning", "info", "light"];


</script>

<div class="card mx-auto border-success mt-4" style="max-width: 540px;" >

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
	  
	  <a href="{base}/x-posts/{xpost.uid}" class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">link</a>
{/if}
     </p>    
 
     
       </div>

</div>