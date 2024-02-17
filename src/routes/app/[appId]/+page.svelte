<script lang="ts">
  import type { Menu } from "../../../../types/menu.d";

  import General from "./General.svelte";
  import Danger from "./Danger.svelte";
  import NavBox from "$lib/components/NavBox.svelte";
  import wwsfetch from "../../../utils/wwsfetch";
  import { page } from "$app/stores";
  import type { App } from "../../../../types/app";

  const menus: Array<Required<Menu>> = [
    {
      id: 1,
      name: "general",
    },
    {
      id: 2,
      name: "danger",
    },
  ];

  let app: App;
  let appTemp;

  let selectedMenu = 1;

  function changeMenu(e: CustomEventInit) {
    selectedMenu = e.detail.menuId;
  }

  async function fetchApp() {
    const res = await wwsfetch(`/app/${$page.params.appId}`);

    app = res.body as unknown as App;
  }
</script>

<section id="my-app">
  <div class="left">
    <NavBox {menus} {selectedMenu} on:changeMenu={changeMenu}></NavBox>
  </div>
  <div class="right">
    {#await fetchApp() then}
      {#if selectedMenu == 1}
        <General {app}></General>
      {:else if selectedMenu == 2}
        <Danger></Danger>
      {/if}
    {/await}
  </div>
</section>

<style lang="scss">
  section#my-app {
    display: flex;
    flex-direction: row;
    gap: 30px;
    .left {
      width: 200px;
    }
    .right {
      width: 600px;
    }
  }
</style>
