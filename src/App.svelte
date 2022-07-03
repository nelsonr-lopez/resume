<script lang="ts">
  import TailwindCss from "./TailwindCSS.svelte";
  import SideBar from "./lib/SideBar.svelte";
  import Profile from "./lib/Profile.svelte";
  import Footer from "./lib/Footer.svelte";
</script>

<TailwindCss />
<main>
  <div class="container mx-auto max-w-screen-xl">
    <div
      id="wrapper"
      class="flex flex-col sm:flex-row-reverse sm:m-12 shadow-2xl"
    >
      <SideBar />
      <Profile />
      <hr class="mt-8 mb-12" />
    </div>
  </div>
  <Footer />
</main>

<style>
</style>
