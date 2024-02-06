<script>
  export let app;

  let inputAppLogo;
  let logoPreview;

  let showLogo = false;

  $: {
    if (app) {
      showLogo = true;
    }
  }

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

  function removeLogo() {
    inputAppLogo.value = "";
    showLogo = false;
  }
</script>

<div class="app-creation-form-container">
  <form id="app-creation-form">
    <div class="app-creation-field app-logo">
      <p class="label">logo</p>
      <div class="logo-preview">
        {#if showLogo}
          <img bind:this={logoPreview} src={app ? app.logo_uri : ""} alt="" />
        {:else}
          <span>no image</span>
        {/if}
      </div>
      <div class="logo-btns">
        <button
          class="btn logo-select"
          on:click={inputAppLogo.click()}
          type="button">select image</button
        >
        <button class="btn logo-delete" on:click={removeLogo} type="button"
          >remove logo</button
        >
      </div>
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
      <p class="label">name</p>
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
      }

      .app-creation-field.app-logo {
        border-top: 0.5px solid var(--border);
        .logo-preview {
          background-color: var(--bg-bar);
          border-radius: 50px;
          width: 100px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 2em;
          overflow: hidden;
          img {
            width: 100%;
          }
        }
        .logo-btns {
          display: flex;
          flex-direction: column;
          gap: 1em;

          .btn {
            padding: 5px 10px;
          }
          .logo-select {
            background-color: var(--font-white);
            color: var(--font-black);
          }
          .logo-delete {
            color: var(--font-red);
            background: none;
          }
        }
      }
    }
  }
</style>
