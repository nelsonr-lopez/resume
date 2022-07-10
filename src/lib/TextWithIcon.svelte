<script>
  import Icon from './Icon.svelte'
  export let text
  export let path
</script>

<div class="flex items-center my-3">
  <Icon title={text} {path} />
  <a href="mailto:">{text}</a>
</div>
