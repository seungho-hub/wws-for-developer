<script>
  let inputAppLogo;
  let logoPreview;
  let showLogo = false;

  function onAppLogoChange() {
    const file = inputAppLogo.files[0];

    if (file) {
      showLogo = true;

      const reader = new FileReader();
      reader.addEventListener("load", function () {
        logoPreview.setAttribute("src", reader.result);
      });
      reader.readAsDataURL(file);

      return;
    }

    showLogo = false;
  }
</script>

<div class="app-creation-form-container">
  <form id="app-creation-form">
    <div class="app-creation-field app-logo">
      <p class="label">app logo</p>
      <div class="logo-preview">
        {#if showLogo}
          <img bind:this={logoPreview} src="" alt="" />
        {:else}
          <span>no image</span>
        {/if}
      </div>
      <button on:click={inputAppLogo.click()} type="button">select image</button
      >
      <input
        type="file"
        name="logo"
        hidden
        class="logo"
        bind:this={inputAppLogo}
        on:change={onAppLogoChange}
      />
    </div>
    <div class="app-creation-field app-name">
      <p class="label">app name</p>
      <input type="text" name="name" class="name" />
    </div>
    <div class="app-creation-field app-uri">
      <p class="label">Homepage URL</p>
      <input type="uri" name="uri" class="uri" />
    </div>
  </form>
</div>

<style lang="scss">
  .app-creation-form-container {
    form {
      display: flex;
      flex-direction: column;
      .app-creation-field {
        border-bottom: 0.5px solid var(--border);
        padding: 1em 0;
        display: flex;
        align-items: center;
        .label {
          width: 15em;
          padding: 0.5em 2em;
        }
        input {
          background-color: var(--bg-bar);
        }
      }

      .app-creation-field.app-logo {
        border-top: 0.5px solid var(--border);
        .logo-preview {
          background-color: var(--bg-bar);
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
