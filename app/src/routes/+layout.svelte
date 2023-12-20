<svelte:head>

 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"> 
 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</svelte:head>




<script>
    import XpostComponent from './xpost.svelte';
	export let data;
	console.log(data);
</script>



<ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link">X-Posts</a>
  </li>
  <li class="nav-item">
    <a class="nav-link">Videos</a>
  </li>
  <li class="nav-item">
    <a class="nav-link">Articles</a>
  </li>
    <li class="nav-item">
    <a class="nav-link">Podcasts</a>
  </li>
</ul>


{#each data.xPosts as xpost}
  <svelte:component this={XpostComponent} xpost={xpost}>
  </svelte:component>


{/each}



<slot></slot>