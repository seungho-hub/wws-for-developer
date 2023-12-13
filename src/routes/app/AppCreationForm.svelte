<script>
  let inputAppIcon;
  let iconPreview;
  let showIcon = false;

  function onAppIconChange() {
    const file = inputAppIcon.files[0];

    if (file) {
      showIcon = true;

      const reader = new FileReader();
      reader.addEventListener("load", function () {
        iconPreview.setAttribute("src", reader.result);
      });
      reader.readAsDataURL(file);

      return;
    }

    showIcon = false;
  }
</script>

<div class="app-creation-form">
  <form action="">
    <div class="app-creation-field app-icon">
      <p class="label">app icon</p>
      <div class="icon-preview">
        {#if showIcon}
          <img bind:this={iconPreview} src="" alt="" />
        {:else}
          <span>no image</span>
        {/if}
      </div>
      <button on:click={inputAppIcon.click()}>select image</button>
      <input
        type="file"
        name="icon"
        hidden
        bind:this={inputAppIcon}
        on:change={onAppIconChange}
      />
    </div>
    <div class="app-creation-field app-name">
      <p class="label">app name</p>
      <input type="text" name="name" />
    </div>
  </form>
</div>

<style lang="scss">
  .app-creation-form {
    form {
      display: flex;
      flex-direction: column;
      .app-creation-field {
        border-bottom: 0.5px solid var(--font-gray);
        padding: 1em 0;
        display: flex;
        align-items: center;
        .label {
          width: 10em;
          padding: 0.5em 2em;
        }
      }

      .app-creation-field.app-icon {
        border-top: 0.5px solid var(--font-gray);
        .icon-preview {
          background-color: var(--bg);
          border-radius: 40px;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 2em;
          overflow: hidden;
          img {
            width: 100%;
          }
        }
        button {
          padding: 5px 10px;
          background-color: var(--font-white);
          color: var(--font-black);
        }
      }
    }
  }
</style>
