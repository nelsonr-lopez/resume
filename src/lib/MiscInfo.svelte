<script>
  import data from '../content/data.json'
  let { languages, education } = data
</script>

<div class="font-light text-lg px-2 mb-12">
  <h2 class="text-xl font-semibold mb-4">Education</h2>
  <h3 class="font-semibold">{education.degree}</h3>
  <p>{education.info}</p>
</div>

<div class="font-light text-lg px-2 mb-12">
  <h2 class="text-xl font-semibold mb-4">Languages</h2>
  {#each languages as language}
    <h3 class="font-semibold">{language.name}</h3>
    <p>{language.fluency}</p>
  {/each}
</div>
