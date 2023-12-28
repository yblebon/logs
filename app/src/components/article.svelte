<script>
	export let article;
	import { onMount } from 'svelte';
	
	let poster = "https://ipfs.filebase.io/ipfs/Qmcrww6uA7cWJAenhRwXWFJQkcCNAoMhntMCkue8aitoEV";
	
	function readArticle(){
	 var win = window.open(article.url, '_blank');
  win.focus();
	}
	
	    onMount(async () => { 
    


const response = await fetch(`https://g.tenor.com/v1/search?q=${article.gif}&key=LIVDSRZULELA&limit=1&media_filter=mediumgif`)

    let result = await response.json()
    let gif = result['results'][0]['media'][0]['mediumgif']
    if (gif != null) {
     poster = gif.url;
    }
  });
</script>


<div class="card me-4 ms-4 mt-4">

<div class="card-header text-bg-dark">

          <span class="me-2 badge text-lowercase text-wrap float-end">
         
     {article.title}
          </span>
          
          
</div>          

   <img id="podcast-poster-img" class="img-fluid rounded-0" src="{poster}"/>


   <div class="card-body bg-light">
   
   
     <p class="card-text">

 <button type="button" on:click={readArticle} class="btn btn-outline-secondary float-end">

 {#if  article.url !== null }
 
 <span>
<i class="gg-readme"></i>
</span>

       {/if}


</button>
     </p>    
 
   </div>

</div>