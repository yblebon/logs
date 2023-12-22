<svelte:head>

 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"> 
 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
 
 <link href="https://vjs.zencdn.net/8.5.2/video-js.css" rel="stylesheet" />
 <script src="https://vjs.zencdn.net/8.5.2/video.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/videojs-playlist/dist/videojs-playlist.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js" integrity="sha512-xi/RZRIF/S0hJ+yJJYuZ5yk6/8pCiRlEXZzoguSMl+vk2i3m6UjUO/WcZ11blRL/O+rnj94JRGwt/CHbc9+6EA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<link
  href="https://cdn.jsdelivr.net/npm/css.gg/icons/icons.css"
  rel="stylesheet"
/>

 
 
</svelte:head>




<script>
    import XpostComponent from '../components/xpost.svelte';
    import VideoComponent from '../components/video.svelte';
    import PodcastComponent from '../components/podcast.svelte';
    import ArticleComponent from '../components/article.svelte'
    
	export let data;
let selected = "x-posts";
	console.log(data);
	
	
	
	
	function changeContent(){
		document.getElementById(selected).classList.remove("btn-info")
		selected = this.id;
		
		document.getElementById(selected).classList.add("btn-info")

		
		
		console.log(this.id);
	}
</script>



<ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link">
      <button id="x-posts" type="button" on:click={changeContent} class="btn text-uppercase fw-bolder btn-info text-black">X-Posts</button>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link">
      <button id="videos" type="button" on:click={changeContent}  class="btn text-uppercase fw-bolder text-black">Videos</button>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link">
    
    <button id="articles" type="button" on:click={changeContent}  class="btn text-uppercase fw-bolder text-black ">Articles</button>
    
    </a>
  </li>
    <li class="nav-item">
    <a class="nav-link">
    <button id="podcasts" type="button" on:click={changeContent}  class="btn text-uppercase fw-bolder text-black">Podcasts</button>
    
    </a>
  </li>
</ul>


<slot />