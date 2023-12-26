<script>    
	
	import { base } from '$app/paths';
    
    let selected = "home";
    
  export let logsCount = 0;

	
	function changeContent(){
		document.getElementById(selected).classList.remove("text-decoration-underline")
		selected = this.id;
		
		document.getElementById(selected).classList.add("text-decoration-underline")

		
	}
	
</script>


<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand fs-2" href="#">     
    
    <strong>
    
    Log
    
    </strong>
    
    

    <small class="text-body-secondary">    Y.B Lebon</small>

    
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="{base}/">
            <span id="home" on:click={changeContent}  class="fw-bolder text-decoration-underline text-black">Home
            

            
            </span>
           </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="{base}/x-posts">
              <span id="x-posts" on:click={changeContent}  class="fw-bolder text-black">X-Posts

              </span>
           </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="{base}/videos">
              <span id="videos" on:click={changeContent}  class="fw-bolder text-black">Videos

              </span>
           </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="{base}/podcasts">
              <span id="podcasts"  on:click={changeContent}  class="fw-bolder text-black">Podcasts

              </span>
           </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="{base}/articles">
              <span id="articles" on:click={changeContent}  class="fw-bolder text-black">Articles    

                       </span>
           </a>
        </li>
        <li class="nav-item vr">
          <a class="ms-3 fw-bolder nav-link" href="{base}/contact" tabindex="-1" aria-disabled="true">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>