<script lang="ts">
  import type { Contact, WebLink } from 'src/content/CopyTypes'

  import data from '../content/data.json'
  import Icon from './Icon.svelte'
  let { contact } = data
  let { webLinks } = contact
</script>

<div class="font-light text-lg px-2 mb-12">
  <h2 class="text-xl font-semibold mb-4">On the Web</h2>
  {#each webLinks as webLink}
    <div class="flex items-center my-3">
      <Icon title={webLink.name} path={webLink.svg} />
      <a href={webLink.link} target="_blank" rel="noopener noreferrer"
        >{webLink.name}</a
      >
    </div>
  {/each}
</div>
