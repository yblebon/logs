<script>

export let dots;
const filebaseBase = "https://ipfs.filebase.io/ipfs";

console.log(dots);

</script>

<div class="accordion bg-light me-4 ms-4 mt-4" id="accordion">

<div class="accordion-item">

<h2 class="accordion-header shadow">
  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-title" aria-expanded="true" aria-controls="collapse-title">
    <strong>
      {dots.title}
    </strong>
  </button>
</h2>

<div id="collapse-title" class="accordion-collapse collapse show" data-bs-parent="#accordion">
    <div class="accordion-body">
       <img src="{filebaseBase}/{dots.poster}" class="card-img-top rounded-0">
    </div>
    </div>
</div>

{#each dots.dots as dotsElement, index }


<div class="accordion-item">

  <h2 class="accordion-header">
      <button class="accordion-button text-capitalize fw-light fs-6" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-{index}" aria-expanded="false" aria-controls="collapse-{index}"> {index+1} - 
        {dotsElement.title}
      </button>
    </h2>

</div>

<div id="collapse-{index}" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      
             {#if dots.video == "true"}
<video class="card-img-top rounded-0 video-js" controls width="100%" height="300" preload="auto" poster="fafo/IMG_0461.png">


   	 <source src="{filebaseBase}/{dotsElement.src}" type="video/mp4">


</video>
         	  
         	 {:else}
         	            	  <img src="{filebaseBase}/{dotsElement.src}" class="card-img-top rounded-0">
         	  
         	  {/if}
      </div>
    </div>


{/each}


<div class="card-body ps-2 pt-2 pb-2 bg-light">
     <p class="card-text">
     
 
       {#if dots.upload_date !== undefined}
       

	  <span class="me-2 text-bg-secondary  badge">{dots.upload_date}</span>
{/if}
     </p>    
 
     
       </div>


</div>
