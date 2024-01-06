<script>
    	import { onMount } from 'svelte';
    	import { base } from '$app/paths';
    import {getGif} from '$lib/utils.js';

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

<figure>
  <blockquote class="blockquote ps-2 pt-2">
    <p>{article.summary}</p>
  </blockquote>
  <figcaption class="blockquote-footer ps-2">
    Someone in <cite class="text-capitalize" title="Source Title">{article.source}</cite>
  </figcaption>
</figure>


   <div class="card-body bg-light">
   
   
     <p class="card-text">
     
 <a href="{base}/articles/{article.uid}" class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">link</a>

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