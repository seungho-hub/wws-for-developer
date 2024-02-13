<script lang="ts">
  import type { Menu } from "../../../types/menu.js";

  import { createEventDispatcher } from "svelte";
  export let menus: Array<Required<Menu>>;
  export let selectedMenu: number;

  const dispatch = createEventDispatcher();
</script>

<nav id="NavBox">
  <ul class="menus">
    {#each menus as menu}
      <li class="menu {selectedMenu == menu.id ? 'selected' : ''}">
        <button
          class="btn-text"
          on:click={() => {
            dispatch("changeMenu", { menuId: menu.id });
          }}>{menu.name}</button
        >
      </li>
    {/each}
  </ul>
</nav>

<style lang="scss">
  nav#NavBox {
    border: 1px solid var(--font-dark-gray);
    border-right: none;
    .menus {
      .menu {
        border-bottom: 1px solid var(--font-dark-gray);
        &:hover {
          background-color: var(--font-dark-gray);
          cursor: pointer;
        }
        &.selected {
          border-left: 2px solid var(--sig);
        }
        button {
          width: 100%;
          font-size: 12px;
          text-align: start;
        }
      }
    }
  }
</style>
