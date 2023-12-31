<script>
   import VideoComponent from '../../../components/video.svelte';
   /** @type {import('./$types').PageData} */
   export let data;
</script>


<VideoComponent video={data.video}/>

