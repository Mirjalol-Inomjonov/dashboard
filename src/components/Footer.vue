<template>
  <footer class="footer">
    <h2 class="title">HR Management system</h2>
  </footer>
</template>

<style lang="scss">
.footer {
  position: fixed;
  width: 100%;
  bottom: 0;
  background-color: #6b705c;
  text-align: center;
  padding: 16px 0;
  .title {
    color: #fff;
  }
}

@media screen and (max-width: 576px) {
  .footer {
    .title {
      font-size: 18px;
    }
  }
}
</style>
