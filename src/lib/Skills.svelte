<script>
  import data from "../content/data.json";
  let { tools, skills } = data;
</script>

<div class="font-light text-lg px-2 mb-12">
  <h2 class="text-xl font-semibold mb-4">Skills & Tools</h2>
  <ul class="list-none">
    {#each skills as skill}
      <li>
        <label for="css-skill">{skill.name}</label>
        <progress id="css-skill" max="100" value={skill.proficiency} />
      </li>
    {/each}
    <li class="pt-2">
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
