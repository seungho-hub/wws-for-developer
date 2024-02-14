<script>
  import { onMount } from "svelte";
  import wwsfetch from "../../utils/wwsfetch";
  import BackDrop from "$lib/components/BackDrop.svelte";
  import AppCreationForm from "./AppCreationForm.svelte";

  let showModal = false;
  let apps = [];

  onMount(() => {
    wwsfetch("/app").then((res) => {
      apps = res.body;
    });
  });

  function submitAppCreationForm() {
    const form = document.querySelector("#app-creation-form");

    const formData = new FormData();
    formData.append("name", form.querySelector(".name").value);

    const logoFile = form.querySelector(".logo").files[0];
    if (logoFile) {
      formData.append("logo", logoFile);
    }
    formData.append("uri", form.querySelector(".uri").value);

    wwsfetch("/app", { method: "POST", body: formData }).then((res) => {
      showModal = false;
      apps = [...apps, res.body];
    });
  }
</script>

<section id="my-apps">
  {#if showModal}
    <BackDrop bind:showModal>
      <div class="modal" on:click|stopPropagation>
        <div class="modal-header">create wws application</div>
        <div class="modal-body">
          <AppCreationForm />
        </div>
        <div class="modal-footer">
          <button
            class="btn-text text-sig"
            on:click={() => (showModal = false)}
          >
            cancle
          </button>
          <button
            class="create sig-btn"
            type="submit"
            on:click={submitAppCreationForm}
          >
            create
          </button>
        </div>
      </div>
    </BackDrop>
  {/if}

  <div class="header">
    <div class="title">
      <p>WWS Apps</p>
    </div>
    <div class="new-app">
      <button class="btn-sig" on:click={() => (showModal = true)}
        >New Application</button
      >
    </div>
  </div>
  <div class="app-card-container">
    {#if apps.length}
      {#each apps as app}
        <div class="app-card">
          <div class="logo">
            <img src={app.logo_uri} alt="" />
          </div>
          <div class="name">
            <p>{app.client_name}</p>
          </div>
          <div class="edit">
            <a class="btn" href="/app/{app.client_id}">edit</a>
          </div>
        </div>
      {/each}
    {:else}
      <div class="empty-prompt">
        <p>try to create wws application!</p>
      </div>
    {/if}
  </div>
</section>

<style lang="scss">
  .modal {
    position: absolute;
    top: 40%;
    left: 50%;
    padding: 25px;
    transform: translate(-50%, -50%);
    width: 50em;
    background-color: var(--bg);
    display: flex;
    flex-direction: column;
    .modal-header {
      font-size: 1.5em;
      margin-bottom: 2em;
    }
    .modal-footer {
      margin-top: 3em;
      display: flex;
      justify-content: flex-end;
      button.create {
        background-color: var(--sig);
        color: var(--font-black);
      }
    }
  }
  #my-apps {
    height: 100%;
    width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    > * {
      width: 60%;
    }
    .header {
      display: flex;
      flex-direction: row;
      border-bottom: 2px solid var(--bg-bar);
      padding-bottom: 10px;
      .title {
        flex: 1;
        p {
          font-size: 1.5em;
        }
      }
      .new-app {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }
    }
    .app-card-container {
      .app-card {
        border-bottom: 3px solid var(--bg-bar);
        padding: 10px 20px;
        display: flex;
        flex-direction: row;
        gap: 20px;
        .logo {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 25px;
          overflow: hidden;
          background-color: #161728;
          margin-right: 2em;
          img {
            width: 50px;
          }
        }
        .name {
          display: flex;
          align-items: center;
          justify-content: center;
          p {
            font-size: 1.2em;
          }
        }
        .edit {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }
      }
      .empty-prompt {
        p {
          color: var(--font-drak-gray);
          text-align: center;
          font-size: 1.2em;
        }
      }
    }
  }
</style>
