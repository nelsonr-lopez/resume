<script>
  export let icon;
  export let text;
</script>

<div class="flex items-center my-3">
  <img src={icon} class="inline w-6 mr-4" />
  <a href="mailto:">{text}</a>
</div>
