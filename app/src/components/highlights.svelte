<script>
  import { base } from "$app/paths";
  export let highlights;
  console.log("------------------------");
  console.log(highlights);
</script>

<div class="accordion mx-auto mt-4" style="max-width: 540px;" id="accordionPanelsStayOpenExample">
  
  {#each highlights as highlight, index}

    <div class="accordion-item">
      <h2 class="accordion-header" id="panelsStayOpen-headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-{index}" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
          {highlight.title}
        </button>
      </h2>
      <div id="panelsStayOpen-{index}" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
        <div class="accordion-body">
          {highlight.text}
        </div>
      </div>
    </div>

  {/each}
  
</div>