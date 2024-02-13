<script>
    import { base } from '$app/paths';
	export let video;
	const filebaseBase = "https://ipfs.filebase.io/ipfs";
</script>




<div class="card mx-auto mt-4" style="max-width: 540px;" >

<div class="card-header text-bg-danger">

          <span class="me-2 badge text-lowercase text-wrap float-end">{video.title}</span>


</div>

{#if video.youtube == "true"}

<iframe id="ytplayer" type="text/html" width="auto" height="300"
  src="{video.url}?autoplay=1&origin=http://example.com"
  frameborder="0">

</iframe>

{:else}


<video class="card-img-top rounded-0 video-js" controls width="100%" height="300" preload="auto" poster="fafo/IMG_0461.png">


   	 <source src="{video.url}" type="video/mp4">


 </video>

{/if}



   <div class="card-body bg-light">
     <p class="card-text">
     
 
       {#if video.upload_date !== undefined}
       

	  <span class="me-2 text-bg-secondary  badge">{video.upload_date}</span>
	  

{/if}



<a href="{base}/videos/{video.uid}" class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">link</a>
	  	  
     </p>    
 
     
       </div>

</div>