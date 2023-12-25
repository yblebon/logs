<script>
	export let podcast;
	const filebaseBase = "https://ipfs.filebase.io/ipfs";
	
	/**
	
	var howler = require('howler');
	
	
	
	let podcastInstance = new howler.Howl({
          src: [podcast.src],
          html5: true,
          volume: 0.9,
          format: ["m4a"],
          onload: function() {
          	console.log("loading podcast ...");
          },
        
          onplay: function(id) {
          	console.log("playing podcast ...");
          },
        
          onstop: function(id) {
          	console.log("stopping podcast ...");
          },
          onend: function() {
          	console.log("podcast ended");
            Howler.unload();
          },
          onplayerror: function() {
          	console.log("error playing podcast");
            Howler.unload();
          },
          onloaderror: function() {
          	console.log("error loading podcast");
            Howler.unload();
          }
          
      });

       */

</script>


<div class="card me-2 ms-2 mt-2" >
   <img id="podcast-poster-img" class="img-fluid" src="https://ipfs.filebase.io/ipfs/Qmcrww6uA7cWJAenhRwXWFJQkcCNAoMhntMCkue8aitoEV"/>


   <div class="card-body bg-light">
     <p class="card-text">

          <span class="me-2 rounded-pill badge bg-dark">
      
          
          {podcast.title}</span>
     
 
       {#if podcast.upload_date !== undefined}
              <br />
	  <span class="me-2 badge text-bg-secondary">{podcast.upload_date}</span>
       {/if}

<span>
<i class="float-end gg-play-button-o"></i>
</span>

     </p>    
   </div>

</div>