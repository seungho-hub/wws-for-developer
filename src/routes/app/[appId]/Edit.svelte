<script>
  import AppCreationForm from "../AppCreationForm.svelte";

  export let app;
</script>

<section class="edit">
  <section class="about">
    <div class="header">
      <h4>About</h4>
    </div>
    <div class="body">
      <p class="appID">App ID : {app?.client_id}</p>
    </div>
  </section>
  <section class="client-secrets">
    <div class="header">
      <h4>Client secrets</h4>
      <button>Generate a client secret</button>
    </div>
    <div class="body">
      <ul class="list">
        <li class="client-secret middle-rounded">
          <div class="left">
            <span class="icon material-symbols-outlined"> vpn_key </span>
          </div>
          <div class="middle">
            <span class="value-hided"> {app?.client_secret} </span>
            <span class="info">
              generated on Jul 12, 2023 by seungho-hub Last used within the last
              6 months
            </span>
          </div>
          <div class="right">
            <button class="delete text-warn">delete</button>
          </div>
        </li>
      </ul>
    </div>
  </section>
  <section class="basic-info">
    <div class="header">
      <h4>Basic information</h4>
    </div>
    <AppCreationForm {app}></AppCreationForm>
  </section>
  <section class="identify-and-authorizing-user">
    <div class="header">
      <h4>Identifying and authorizing user</h4>
    </div>
    <div class="body">
      <div class="header-sub">
        <h3>Callback URL</h3>
      </div>
      <input type="url" />
    </div>
  </section>
  <section class="action">
    <button class="btn-sig">Save changes</button>
    <button class="btn-text text-sig">Cancel</button>
  </section>
</section>

<style lang="scss">
  section.edit {
    display: flex;
    flex-direction: column;
    gap: 1em;
    > section {
      margin-bottom: 40px;
      .header {
        display: flex;
        flex-direction: row;
        border-bottom: 2px solid var(--bg-bar);
        padding-bottom: 10px;
        margin-bottom: 15px;
      }
    }

    section.client-secrets {
      .header {
        display: flex;
        justify-content: space-between;
      }
      ul.list {
        li.client-secret {
          margin: 10px 0;
          display: flex;
          flex-direction: row;
          padding: 10px;
          border: 0.5px solid var(--font-dark-gray);
          flex-grow: 1;
          > * {
            padding: 10px;
          }
          .left {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .middle {
            display: flex;
            flex-direction: column;
            flex-grow: 4;
            .value-hided {
              font-size: 0.8em;
            }
            .info {
              color: var(--font-light-gray);
            }
          }
          .right {
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex-grow: 1;
            .delete {
              flex-grow: 0;
            }
          }
        }
      }
    }

    section.identify-and-authorizing-user {
      .body {
        .header-sub {
          h3 {
            font-size: 1.2em;
            font-weight: lighter;
          }
          margin: 15px 0;
        }
        input {
          width: 80%;
        }
      }
    }
  }
</style>
