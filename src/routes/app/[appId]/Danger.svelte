<script>
</script>

<section class="danger">
  <section class="danger-zone">
    <div class="header">
      <h3 class="text-warn">Danger zone</h3>
    </div>
    <div class="body border-warn border-thin little-rounded">
      <ul>
        <li>
          <div class="left">
            <h5>Delete wws app</h5>
            <p class="text-blur">this action can not be undone.</p>
          </div>
          <div class="right">
            <button class="text-warn"> Delete WWS App </button>
          </div>
        </li>
      </ul>
    </div>
  </section>
</section>

<style lang="scss">
  section.danger {
    > section {
      margin-bottom: 40px;
      .header {
        margin-bottom: 15px;
      }
    }

    .danger-zone {
      .body {
        ul {
          li {
            padding: 5px 10px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }
        }
      }
    }
  }
  .border-warn {
    border: 1px solid var(--font-red);
    padding: 10px;
  }
</style>
