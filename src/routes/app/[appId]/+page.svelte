<script>
  import { onMount } from "svelte";
  import wwsfetch from "../../../utils/wwsfetch";

  export let data;

  let app;

  onMount(() => {
    wwsfetch(`/app/${data.appId}`)
      .then((res) => {
        app = res;
      })
      .catch((err) => {
        console.log(err);
      });
  });
</script>

<section id="my-app">
  <div class="header">
    <h2>About</h2>
  </div>
  <div class="appInfo">
    <p class="app ID">App ID : {app.client_id}</p>
    <p></p>
  </div>
  <div class="footer">footer</div>
</section>

<style lang="scss">
  #my-app {
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
      padding-bottom: 10px;
    }
  }
</style>
