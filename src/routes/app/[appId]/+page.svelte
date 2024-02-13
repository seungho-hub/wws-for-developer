<script lang="ts">
  import type { App } from "../../../../types/app";
  import type { Menu } from "../../../../types/menu.d";

  import Edit from "./Edit.svelte";
  import Danger from "./Danger.svelte";
  import NavBox from "$lib/components/NavBox.svelte";
  import wwsfetch from "../../../utils/wwsfetch";
  import { page } from "$app/stores";
  import { onMount } from "svelte";

  let app: App;

  const menus: Array<Required<Menu>> = [
    {
      id: 1,
      name: "edit",
    },
    {
      id: 2,
      name: "danger",
    },
  ];

  let selectedMenu = 1;

  function changeMenu(e: CustomEventInit) {
    selectedMenu = e.detail.menuId;
  }

  onMount(() => {
    wwsfetch(`/app/${$page.params.appId}`).then((res) => {
      app = res.body as unknown as App;
    });
  });
</script>

<section id="my-app">
  <div class="left">
    <NavBox {menus} {selectedMenu} on:changeMenu={changeMenu}></NavBox>
  </div>
  <div class="right">
    {#if selectedMenu == 1}
      <Edit {app}></Edit>
    {:else if selectedMenu == 2}
      <Danger></Danger>
    {/if}
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
