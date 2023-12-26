<script>
	export let article;
</script>

<div class="card me-4 ms-4 mt-4" >

<div class="card-header text-bg-dark">

          <span class="me-2 badge text-lowercase">
         
     {article.title}
          </span>
          
           <button type="button" class="btn btn-outline-secondary float-end">

 {#if  article.url !== null }
 
 <span>
<i class="gg-readme"></i>
</span>

       {/if}


</button>
</div>          

   <img id="podcast-poster-img" class="img-fluid rounded-0" src="https://ipfs.filebase.io/ipfs/Qmcrww6uA7cWJAenhRwXWFJQkcCNAoMhntMCkue8aitoEV"/>


   <div class="card-body bg-light">
   
   
     <p class="card-text">

          <span class="me-2 rounded-pill badge bg-dark">
          

          
          </span>
     </p>    
 
   </div>

</div>