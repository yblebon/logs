<svelte:head>
</svelte:head>




<script>
    import MenuComponent from '../components/menu.svelte'
    let tag = "";  
    function handleSubmit(inputTag) {  
        console.log(inputTag);
    }  
	
    
</script>

<style>



</style>

<MenuComponent onSubmit={handleSubmit}/>

<div class=" container-sm">

<slot />

</div>

