<script>
  import WorkExperience from './WorkExperience.svelte'
  import Learning from './Learning.svelte'
  import SeciontHeadline from './SeciontHeadline.svelte'
  import data from '../content/data.json'

  let { jobs } = data

  let profileCopy = data.profile
</script>

<div id="profile" class="w-full p-12">
  <div class="prose">
    <SeciontHeadline title="Profile" />
    <p>
      {profileCopy.p1}
    </p>
    <p>
      {profileCopy.p2}
    </p>
  </div>
  <hr class="mt-8 mb-12" />
  <SeciontHeadline title="Experience" />
  {#each jobs as job}
    <WorkExperience experience={job} />
  {/each}
  <!-- <Projects /> -->
  <Learning />
</div>
