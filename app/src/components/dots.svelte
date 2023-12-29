<script>

export let dots;

console.log(dots)
const filebaseBase = "https://ipfs.filebase.io/ipfs";


</script>


<div class="accordion" id="accordionExample">



{#each dots.dots as dotsElement }

<div class="mt-4 accordion-item">

 <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        {dotsElement.title}
      </button>
    </h2>

</div>
<div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
         	  <img src="{filebaseBase}/{dotsElement.src}" class="card-img-top rounded-0">
      </div>
    </div>





  
{/each}

</div>