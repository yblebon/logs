<script>
	export let video;
	const filebaseBase = "https://ipfs.filebase.io/ipfs";


</script>


<div class="card me-4 ms-4 mt-4" >

<div class="card-header text-bg-danger">

          <span class="me-2 badge text-lowercase text-wrap float-end">{video.title}</span>


</div>

<video class="card-img-top rounded-0 video-js" controls width="100%" height="300" preload="auto" poster="fafo/IMG_0461.png">


   	 <source src="{video.url}" type="video/mp4">


</video>

   <div class="card-body bg-light">
     <p class="card-text">
     
 
       {#if video.upload_date !== undefined}
       

	  <span class="me-2 text-bg-secondary  badge">{video.upload_date}</span>
	  

{/if}



<a href="/videos/{video.uid}" class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">link</a>
	  	  
     </p>    
 
     
       </div>

</div>