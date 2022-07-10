<script lang="ts">
  import type { Experience } from '../content/CopyTypes'
  export let experience: Experience
</script>

<div id="experience" class="prose">
  <div>
    <h3>{experience.companyName}</h3>
    <section class="mb-6">
      <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
        {experience.workDate}:
      </div>
      <div class="lg:inline-block lg:w-8/12 w-full">{experience.title}</div>
    </section>
    <section class="mb-6">
      <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
        Task:
      </div>
      <div class="lg:inline-block lg:w-8/12 w-full">
        {experience.task}
      </div>
    </section>
    <section class="mb-6">
      <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
        Description:
      </div>
      <div class="lg:inline-block lg:w-8/12 w-full">
        {experience.description}
      </div>
    </section>
  </div>
  <section class="mb-6">
    <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">Tools:</div>
    <div class="lg:inline-block lg:w-8/12 w-full">
      {#each experience.tools as tool}
        <span class="rounded-xl bg-gray-300 px-3">{tool} </span>
        &nbsp;
      {/each}
    </div>
  </section>
</div>
