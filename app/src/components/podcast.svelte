<script>
	export let podcast;
	const filebaseBase = "https://ipfs.filebase.io/ipfs";
	
	console.log(podcast.src);
	
	let status = "stop";
	
	
	let podcastInstance;
	
	function createInstance(){	 	 
	 
	 

	podcastInstance = new Howl({
          src: [podcast.src],
          html5: true,
          volume: 0.9,
          format: ["m4a"],
          onload: function() {
          	console.log("loading podcast ...");
          },
        
          onplay: function(id) {
          	console.log("playing podcast ...");
          	status = "playing";
          },
        
          onstop: function(id) {
          	console.log("stopping podcast ...");
          	status = "stop";
          },
          onend: function() {
          	console.log("podcast ended");
          	status = "stop";
            Howler.unload();
          },
          onplayerror: function() {
          	console.log("error playing podcast");
          	status = "stop";
            Howler.unload();
          },
          onloaderror: function() {
          	console.log("error loading podcast");
          	status = "stop";
            Howler.unload();
          }
          
      });
      
      }

     function playPodcast(){
      
      if (podcastInstance == null){
       createInstance();
      }
      
      if (status == "playing"){
          podcastInstance.stop();
       
     } else {
          podcastInstance.play();
       
      }

     }
     	
	

       

</script>


<div class="card me-4 ms-4 mt-4" >
<div class="card-header">

          <span class="me-2 badge text-lowercase text-bg-warning">{podcast.title}</span>
          
                    
          <button type="button" on:click={playPodcast} class="btn btn-outline-primary float-end">

 {#if status == "stop"}
 
 <span>
<i class="gg-play-button-o"></i>
</span>

 
  {:else if status == "playing"}

<span>
<i class="gg-play-stop-o"></i>
</span>

       {/if}


</button>


</div>


   <img id="podcast-poster-img" class="img-fluid" src="https://ipfs.filebase.io/ipfs/Qmcrww6uA7cWJAenhRwXWFJQkcCNAoMhntMCkue8aitoEV"/>


   <div class="card-body bg-light">
     <p class="card-text">


     
 
       {#if podcast.upload_date !== undefined}
              <br />
	  <span class="me-2 badge text-bg-secondary">{podcast.upload_date}</span>
       {/if}







     </p>    
   </div>

</div>