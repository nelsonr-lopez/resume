<script lang="ts">
  import TextWithIcon from "./TextWithIcon.svelte";
  import Links from "./Links.svelte";
  import Skills from "./Skills.svelte";
  import MiscInfo from "./MiscInfo.svelte";
  import data from "../content/data.json";
  let { contact } = data;
  let { email, phone, address } = contact;
  console.log(phone);
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
    <h1 class="text-center text-3xl font-semibold mb-2">{contact.name}</h1>
    <h2 class="text-center text-xl font-light">{contact.title}</h2>
  </div>
  <div class="font-light text-lg px-2 mb-12">
    <h2 class="text-xl font-semibold mb-4">Contact</h2>
    <TextWithIcon path={email.svg} text={email.info} />

    <TextWithIcon path={phone.svg} text={phone.info} />
    <TextWithIcon path={address.svg} text={address.info} />
  </div>
  <!-- <PersonalInfo /> -->
  <Links />
  <Skills />
  <MiscInfo />
</div>
