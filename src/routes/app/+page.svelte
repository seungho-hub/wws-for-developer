<script>
  import { onMount } from "svelte";
  import wwsfetch from "../../utils/wwsfetch";

  let apps = [];

  onMount(() => {
    wwsfetch("/app").then((res) => {
      apps = res.body;
    });
  });
</script>

<section id="my-apps">
  <div class="header">
    <div class="title">
      <p>WWS Apps</p>
    </div>
    <div class="new-app">
      <button class="new-app-btn">New Application</button>
    </div>
  </div>
  <div class="app-card-container">
    {#if apps.length}
      {#each apps as app}
        <div class="app-card">
          <div class="logo">
            <img src={app.logo} alt="" />
          </div>
          <div class="name">
            <p>{app.name}</p>
          </div>
          <div class="edit">
            <button>edit</button>
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
  #my-apps {
    height: 100%;
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
      padding-bottom: 1em;
      .title {
        flex: 1;
        p {
          font-size: 2em;
        }
      }
      .new-app {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        button {
          font-weight: 800;
          background-color: var(--sig);
          color: var(--font-black);
        }
      }
    }
    .app-card-container {
      .app-card {
        border-bottom: 3px solid var(--bg-bar);
        padding: 1em 2em;
        display: flex;
        flex-direction: row;
        gap: 2em;
        .logo {
          width: 5em;
          height: 5em;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 2.5em;
          overflow: hidden;
          background-color: #161728;
          margin-right: 2em;
          img {
            width: 5em;
            height: 5em;
          }
        }
        .name {
          display: flex;
          align-items: center;
          justify-content: center;
          p {
            font-size: 1.5em;
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
          color: var(--font-gray);
          text-align: center;
          font-size: 1.5em;
        }
      }
    }
  }
</style>
