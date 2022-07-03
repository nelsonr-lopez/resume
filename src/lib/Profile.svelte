<script>
  import Experience from "./Experience.svelte";
  import Footer from "./Footer.svelte";
  import Learning from "./Learning.svelte";
  import Projects from "./Projects.svelte";
</script>

<div id="profile" class="w-full p-12">
  <div id="profile" class="prose">
    <h2
      class="font-bold sm:text-xl uppercase tracking-widest text-green-600 border-green-500 border-l-8 pl-2;"
    >
      Profile
    </h2>
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
