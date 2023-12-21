<script>
	export let podcast;
	const filebaseBase = "https://ipfs.filebase.io/ipfs";
	
	let status = "stop";
	
	console.log(podcast.src)
	
	let podcastInstance = new Howl({
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
      
      function updateStatus(){
       console.log(status)
       if ( status == 'stop') {
        
         podcastInstance.play();
       }
       
       else if (status == 'playing'){
               podcastInstance.stop()
        
       }

      }


</script>


<div class="card me-2 ms-2 mt-2" >
   <img id="podcast-poster-img" class="img-fluid" src="https://ipfs.filebase.io/ipfs/Qmcrww6uA7cWJAenhRwXWFJQkcCNAoMhntMCkue8aitoEV"/>


   <div class="card-body bg-light">
     <p class="card-text">

          <span class="me-2 rounded-pill badge bg-dark">
      
          
          {podcast.title}</span>
     
 
       {#if podcast.date !== undefined}
	  <span class="me-2 badge bg-dark">{podcast.date}</span>
       {/if}


<button on:click={updateStatus} type="button" class="btn btn-primary float-end btn-sm">


       {#if status == 'stop'}
<i class="gg-play-button-o"></i>

{:else if status == 'playing'}

<i class="gg-play-stop-o"></i>


       {/if}


</button>





     </p>    
 
     
       </div>

</div>