<script>
  export let showModal;
</script>

<div
  class="backdrop"
  on:click={() => {
    showModal = false;
  }}
>
  <slot />
</div>

<style lang="scss">
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
</style>
