<script>
  import data from "../content/data.json";
  let { tools } = data;
</script>

<div class="font-light text-lg px-2 mb-12">
  <h2 class="text-xl font-semibold mb-4">Skills & Tools</h2>
  <ul class="list-none">
    <li>
      <label for="js-skill">JavaScript</label>
      <progress id="js-skill" max="100" value="70" />
    </li>
    <li>
      <label for="vue-skill">Vue / Vuex</label>
      <progress id="vue-skill" max="100" value="80" />
    </li>
    <li>
      <label for="react-skill">React</label>
      <progress id="react-skill" max="100" value="66" />
    </li>
    <li>
      <label for="nextjs-skill">Next.js</label>
      <progress id="nextjs-skill" max="100" value="72" />
    </li>
    <li>
      <label for="eleventy-skill">Eleventy</label>
      <progress id="eleventy-skill" max="100" value="66" />
    </li>
    <li>
      <label for="node-skill">Node / Express.js</label>
      <progress id="node-skill" max="100" value="45" />
    </li>
    <li>
      <label for="css-skill">SCSS</label>
      <progress id="css-skill" max="100" value="75" />
    </li>
    <li>
      <label for="design-skill">Inkscape / Figma</label>
      <progress id="design-skill" max="100" value="62" />
    </li>
    <li>
      <div>Infrastructure / Hosting / DB</div>
      <p class="leading-8">
        {#each tools as tool}
          <span class="rounded-xl bg-gray-300 px-2.5">{tool}</span> &nbsp;
        {/each}
      </p>
    </li>
  </ul>
</div>

<style>
  progress {
    margin-top: 0.5rem;
    width: 100%;
    height: 10px;
    margin-bottom: 0.4rem;
  }

  progress::-webkit-progress-bar {
    border-radius: 10px;
    background-color: #d1d5db;
    box-shadow: 0 2px 6px #555;
  }

  progress::-webkit-progress-value {
    border-radius: 10px 0 0 10px;
    background-image: linear-gradient(36deg, #d1fae5, #818cf8);
  }

  .section-headline {
    color: #10b981 !important;
  }
</style>
