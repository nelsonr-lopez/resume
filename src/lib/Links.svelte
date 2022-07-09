<script>
  import data from "../content/data.json";
  import LogoGithub from "../assets/LogoGithub.svelte";
  let { webLinks } = data["contact"];
</script>

<div class="font-light text-lg px-2 mb-12">
  <h2 class="text-xl font-semibold mb-4">On the Web</h2>
  {#each webLinks as webLink}
    <div class="flex items-center my-3">
      <LogoGithub />
      <a href={webLink.link} target="_blank" rel="noopener noreferrer"
        >{webLink.name}</a
      >
    </div>
  {/each}
</div>
