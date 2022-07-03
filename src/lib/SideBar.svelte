<script lang="ts">
  import TextWithIcon from "./TextWithIcon.svelte";
  import PersonalInfo from "./PersonalInfo.svelte";
  import Links from "./Links.svelte";
  import Skills from "./Skills.svelte";
  import MiscInfo from "./MiscInfo.svelte";
</script>

<div
  id="sidebar"
  class="w-full sm:max-w-sm p-8 bg-gradient-to-b from-indigo-300 via-green-300 to-white"
>
  <div class="px-2 mb-12">
    <img
      src="./assets/jack-finnigan-rriAI0nhcbc-unsplash.jpg"
      alt="Profile Picture"
      class="rounded-full w-48 mx-auto mb-2"
    />
    <h1 class="text-center text-3xl font-semibold mb-2">Nelson Lopez</h1>
    <h2 class="text-center text-xl font-light">Fullstack Developer</h2>
  </div>
  <div class="font-light text-lg px-2 mb-12">
    <h2 class="text-xl font-semibold mb-4">Contact</h2>
    <TextWithIcon
      icon="./assets/mail-outline.svg"
      text="dev.nelsonlopez@gmail.com"
    />

    <TextWithIcon icon="./assets/mail-outline.svg" text="347-376-0753" />
  </div>
  <div class="flex items-center my-3">
    <img src="./assets/home-outline.svg" class="inline w-6 pb-1 mr-4" />
    <div>
      <p>3453 Corlear Avenue</p>
      <p>NY</p>
    </div>
  </div>
  <PersonalInfo />
  <Links />
  <Skills />
  <MiscInfo />
</div>
