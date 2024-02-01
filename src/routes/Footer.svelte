<script>
  import logo from "$lib/images/logo.png";
</script>

<section id="footer">
  <ul>
    <li>Terms</li>
    <li>Privacy</li>
    <li>Security</li>
    <li>Status</li>
    <li>Docs</li>
    <li>Contact</li>
    <li>Manage cookies</li>
  </ul>
  <div>
    <div>
      <img src={logo} alt="" />
      <span>2024 working with someone. inc.</span>
    </div>
  </div>
</section>

<style lang="scss">
  section#footer {
    width: 100%;
    background-color: var(--bg);
    padding: 20px 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 40px;
    * {
      color: var(--font-light-gray);
    }
    ul {
      display: flex;
      align-items: row;
      justify-content: center;
      li {
        padding: 5px;
      }
    }
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 20px;
        margin: 10px;
      }
    }
  }
</style>
