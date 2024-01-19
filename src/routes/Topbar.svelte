<script>
  import logo from "$lib/images/logo.png";
</script>

<section class="topbar">
  <div class="logo">
    <img src={logo} alt="stuart" />
    <p>Working With Developer</p>
  </div>
  <ul class="menus">
    <li class="menu btn"><a href="/app">My Application</a></li>
    <li class="menu btn"><a href="">Documentation</a></li>
    <li class="menu assets btn"><a href="">Assets</a></li>
  </ul>
  <div class="others">
    <span class="material-icons"> apps </span>
  </div>
</section>

<style lang="scss">
  section.topbar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5em;
    background-color: var(--bg-bar);

    padding: 0 1.3em;
    display: flex;

    > * {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .logo {
      margin-right: auto;
    }

    .logo img {
      width: 2em;
      margin-right: 10px;
    }

    .menus {
      gap: 40px;
      margin-right: 30px;

      .menu {
        text-align: center;
        a {
          font-size: 1.2em;
        }
      }
    }
  }
</style>
