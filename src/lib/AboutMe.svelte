<script>
  import Experience from "./Experience.svelte";
  import Learning from "./Learning.svelte";
  import SeciontHeadline from "./SeciontHeadline.svelte";
  import data from "../content/data.json";
  let fourUSCopy = data["4us"];

  let profileCopy = data.profile;
  let securitizeCopy = data.securitize;
</script>

<div id="profile" class="w-full p-12">
  <div id="profile" class="prose">
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
  <Experience experienceCopy={fourUSCopy} />
  <Experience experienceCopy={securitizeCopy} />
  <!-- <Projects /> -->
  <Learning />
</div>
