<script>

export let dots;

console.log(dots)
const filebaseBase = "https://ipfs.filebase.io/ipfs";


</script>


<div class="accordion bg-light mt-4" id="accordionExample">

<div class="accordion-item">

 <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-title" aria-expanded="true" aria-controls="collapse-title">
      <strong>
        {dots.title}
       </strong>
      </button>
    </h2>

</div>
<div id="collapse-title" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
         	  <img src="{filebaseBase}/{dots.poster}" class="card-img-top rounded-0">
      </div>
    </div>




{#each dots.dots as dotsElement, index }

<div class="accordion-item">

 <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-{index}" aria-expanded="false" aria-controls="collapse-{index}"> {index+1} - 
        {dotsElement.title}
      </button>
    </h2>

</div>
<div id="collapse-{index}" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
         	  <img src="{filebaseBase}/{dotsElement.src}" class="card-img-top rounded-0">
      </div>
    </div>





  
{/each}

</div>