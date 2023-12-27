<script>
	export let article;
	
	function readArticle(){
	 var win = window.open(article.url, '_blank');
  win.focus();
	}
</script>

<div class="card me-4 ms-4 mt-4">

<div class="card-header text-bg-dark">

          <span class="me-2 badge text-lowercase text-wrap float-end">
         
     {article.title}
          </span>
          
          
</div>          

   <img id="podcast-poster-img" class="img-fluid rounded-0" src="https://ipfs.filebase.io/ipfs/Qmcrww6uA7cWJAenhRwXWFJQkcCNAoMhntMCkue8aitoEV"/>


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