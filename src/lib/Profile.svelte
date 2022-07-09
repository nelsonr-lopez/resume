<script>
  import Experience from "./Experience.svelte";
  import Footer from "./Footer.svelte";
  import Learning from "./Learning.svelte";
  import Projects from "./Projects.svelte";
  import SeciontHeadline from "./SeciontHeadline.svelte";
</script>

<div id="profile" class="w-full p-12">
  <div id="profile" class="prose">
    <SeciontHeadline title="Profile" />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Dictum non consectetur
      a erat nam. Elementum eu facilisis sed odio morbi quis commodo odio.
    </p>
  </div>
  <hr class="mt-8 mb-12" />
  <Experience />
  <Projects />
  <Learning />
</div>
