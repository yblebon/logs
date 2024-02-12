<script>

import ProjectComponent from '../../components/project.svelte';
export let data;

</script>

<svelte:head>

  <!-- HTML Meta Tags -->
  <title>Yasser B. Lebon Projects</title>
  <meta name="description" content="Yasser B. Lebon project records">

</svelte:head>

{#each data.projects as project}
  <ProjectComponent project={project}/>
{/each}