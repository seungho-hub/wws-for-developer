<script>
  import logo from "$lib/images/logo.png";
</script>

<section class="topbar">
  <div class="logo">
    <img src={logo} alt="stuart" />
    <p>Working With Developer</p>
  </div>
  <ul class="menus">
    <li class="menu btn">My Application</li>
    <li class="menu btn">Documentation</li>
    <li class="menu assets btn">Assets</li>
  </ul>
  <div class="others btn">
    <span class="material-icons"> apps </span>
  </div>
</section>

<style>
  section.topbar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5em;
    background-color: var(--bg-bar);

    padding: 0 1.3em;
    display: flex;
  }

  section.topbar > * {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  section.topbar .logo {
    margin-right: auto;
  }

  section.topbar .logo img {
    width: 2em;
    margin-right: 10px;
  }

  section.topbar .menus {
    gap: 40px;
    margin-right: 30px;
  }

  section.topbar .menus .menu {
    text-align: center;
  }
</style>
