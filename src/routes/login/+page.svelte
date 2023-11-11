<script>
  import { browser } from "$app/environment";

  export let data;
  if (data.token) {
    if (browser) {
      window.localStorage.setItem("token", data.token);
      window.location.href = "/";
    }
  }
</script>

<section>로그인에 성공해 홈으로 이동중입니다..</section>

<style lang="scss">
</style>
