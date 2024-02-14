<script>
  let copied = false;
  export let size;
  export let text;

  function copyToClipboard() {
    navigator.clipboard.writeText(text);

    copied = true;

    setTimeout(() => (copied = false), 3000);
  }
</script>

{#if copied}
  <div class="copied">
    <span class="material-symbols-outlined text-blur" style="font-size:{size}">
      done
    </span>
    <span class="prompt text-blur">copied!</span>
  </div>
{:else}
  <button on:click={copyToClipboard}>
    <span class="material-symbols-outlined" style="font-size:{size}">
      content_copy
    </span>
  </button>
{/if}

<style lang="scss">
  button {
    background: none;
    padding: 0;
    display: flex;
    justify-content: center;
    span {
      font-size: 14px;
    }
  }
  div.copied {
    display: flex;
    align-items: center;
    span {
      font-size: 12px;
    }

    .prompy {
      font-size: 8px;
    }
  }
</style>
