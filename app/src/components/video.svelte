<script>
	export let video;
	const filebaseBase = "https://ipfs.filebase.io/ipfs";


</script>


<div class="card me-4 ms-4 mt-4" >
 <video class="card-img-top video-js" controls width="100%" height="300" preload="auto" poster="fafo/IMG_0461.png">

  {#if video.src == "filebase"}
     <source src="{filebaseBase}/{video.id}" type="video/mp4">
{:else}
   	 <source src="{video.src}" type="video/mp4">
{/if}

</video>

   <div class="card-body bg-light">
     <p class="card-text">

          <span class="me-2 rounded-pill badge bg-dark">{video.title}</span>
     
 
       {#if video.upload_date !== undefined}
       
       <br />

	  <span class="me-2 text-bg-secondary  badge">{video.upload_date}</span>
{/if}
     </p>    
 
     
       </div>

</div>