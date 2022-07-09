<script>
  import SeciontHeadline from "./SeciontHeadline.svelte";
</script>

<hr class="mt-8 mb-12" />
<div id="projects" class="prose">
  <SeciontHeadline title="Projects" />
  <div class="mb-16">
    <h3 id="chrisko-headline">Nelson.io</h3>
    <section class="mb-6">
      <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
        Personal blog:
      </div>
      <div class="lg:inline-block lg:w-8/12 w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Dictum non
        consectetur a erat nam. Elementum eu facilisis sed odio morbi quis
        commodo odio.
      </div>
    </section>
    <section class="mb-6">
      <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
        Deployed to:
      </div>
      <div class="lg:inline-block lg:w-8/12 w-full">
        <a href="https://stuff.io" target="_blank" rel="noopener noreferrer"
          >stuff.io</a
        >
      </div>
    </section>
    <section class="mb-6">
      <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
        Code on:
      </div>
      <div class="lg:inline-block lg:w-8/12 w-full">
        <a
          href="https://github.com/nelsonrlopez"
          target="_blank"
          rel="noopener noreferrer">GitHub/nextjs-blog</a
        >
      </div>
    </section>
    <section class="mb-6">
      <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
        Features:
      </div>
      <div class="lg:inline-block lg:w-8/12 w-full">
        <ul>
          <li>Static generation</li>
          <li>Blog content written in Markdown</li>
          <li>Counter for pageviews and likes</li>
          <li>My latest tweets</li>
          <li>Featured images made with Inkscape</li>
          <li>SEO</li>
        </ul>
      </div>
    </section>

    <section class="mb-6">
      <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
        Built with:
      </div>
      <div class="lg:inline-block lg:w-8/12 w-full">
        <span class="rounded-xl bg-gray-300 px-3">Next.js</span>
        <span class="rounded-xl bg-gray-300 px-3">CSS</span>
        <span class="rounded-xl bg-gray-300 px-3">styled-jsx</span>
        <span class="rounded-xl bg-gray-300 px-3">DynamoDB</span>
        <span class="rounded-xl bg-gray-300 px-3">Vercel</span>
      </div>
    </section>
  </div>
</div>
