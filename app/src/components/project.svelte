<script>
    import { base } from '$app/paths';
	export let project;
	const filebaseBase = "https://ipfs.filebase.io/ipfs";
</script>




<div class="card me-4 ms-4 mt-4" >

<div class="card-header text-bg-danger">

          <span class="me-2 badge text-lowercase text-wrap float-end">{project.title}</span>


</div>


   <div class="card-body bg-light">
           <p class="card-text">{project.description}

        </p>
     <p class="card-text">
     
 
       {#if project.date !== undefined}
       

	  <span class="me-2 text-bg-secondary  badge">{project.date}</span>
	  

{/if}



<a href="{base}/projects/{project.uid}" class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">link</a>
	  	  
     </p>    
 
     
       </div>

</div>