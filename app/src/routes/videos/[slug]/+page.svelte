<script>
    import VideoComponent from '../../../components/video.svelte';
    
	/** @type {import('./$types').PageData} */
	export let data;
	console.log(data)
</script>

<VideoComponent video={data.video}/>





