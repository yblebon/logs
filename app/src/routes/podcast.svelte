<script>
	export let podcast;
	const filebaseBase = "https://ipfs.filebase.io/ipfs";


</script>


<div class="card me-2 ms-2 mt-2" >
   <img id="podcast-poster-img" class="mx-auto img-fluid" src="https://ipfs.filebase.io/ipfs/Qmcrww6uA7cWJAenhRwXWFJQkcCNAoMhntMCkue8aitoEV"/>


   <div class="card-body bg-light">
     <p class="card-text">

          <span class="me-2 rounded-pill badge bg-dark">{podcast.title}</span>
     
 
       {#if podcast.date !== undefined}
	  <span class="me-2 badge bg-dark float-end">{podcast.date}</span>
{/if}
     </p>    
 
     
       </div>

</div>