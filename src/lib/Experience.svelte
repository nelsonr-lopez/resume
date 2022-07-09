<script lang="ts">
  import type { ExperienceCopy } from '../content/CopyTypes'
  export let experienceCopy: ExperienceCopy
</script>

<div id="experience" class="prose">
  <div>
    <h3>{experienceCopy.companyName}</h3>
    <section class="mb-6">
      <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
        {experienceCopy.workDate}:
      </div>
      <div class="lg:inline-block lg:w-8/12 w-full">{experienceCopy.title}</div>
    </section>
    <section class="mb-6">
      <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
        Task:
      </div>
      <div class="lg:inline-block lg:w-8/12 w-full">
        {experienceCopy.task}
      </div>
    </section>
    <section class="mb-6">
      <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
        Description:
      </div>
      <div class="lg:inline-block lg:w-8/12 w-full">
        {experienceCopy.description}
      </div>
    </section>
  </div>
  <section class="mb-6">
    <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">Tools:</div>
    <div class="lg:inline-block lg:w-8/12 w-full">
      {#each experienceCopy.tools as tool}
        <span class="rounded-xl bg-gray-300 px-3">{tool} </span>
        &nbsp;
      {/each}
    </div>
  </section>
</div>
