<script lang="ts">
  import TailwindCss from "./TailwindCSS.svelte";
  import SideBar from "./lib/SideBar.svelte";
  import AboutMe from "./lib/AboutMe.svelte";
  import Footer from "./lib/Footer.svelte";
</script>

<!-- TODO:-->
<!-- Fix Horizontal Stretch on body -->

<TailwindCss />
<div class="container mx-auto max-w-screen-xl">
  <main
    id="wrapper"
    class="flex flex-col sm:flex-row-reverse sm:m-12 shadow-2xl"
  >
    <SideBar />
    <AboutMe />
    <hr class="mt-8 mb-12" />
  </main>
</div>
<Footer />

<style>
</style>
