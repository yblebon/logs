<svelte:head>
</svelte:head>




<script>
    import MenuComponent from '../components/menu.svelte'
    let tag = "";  
    function handleChange(inputTag) {  
        console.log(inputTag);
    }  
	
    
</script>

<style>



</style>

<MenuComponent onChange={handleChange}/>

<div class=" container-sm">

<slot />

</div>

