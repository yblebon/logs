<svelte:head>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
 
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
    import ArticleComponent from '../components/article.svelte';
    import MenuComponent from '../components/menu.svelte'
    
	
    
    let selected = "x-posts";
	
	function changeContent(){
		document.getElementById(selected).classList.remove("btn-info")
		selected = this.id;
		
		document.getElementById(selected).classList.add("btn-info")

		
		console.log(this.id);
	}
</script>

<MenuComponent />


<slot />