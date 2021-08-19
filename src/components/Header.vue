<template>
  <header class="header">
    <div class="container">
      <router-link class="header__logo" to="/">Dashboard</router-link>
      <nav class="navbar" :class="show ? 'nav-rwd' : ''">
        <div class="navbar__close d-sm-none" @click="showing()">x</div>
        <router-link class="header__anchor" to="/">Home</router-link>
        <router-link class="header__anchor" to="/students"
          >Students</router-link
        >
        <router-link class="header__anchor" to="/about">About</router-link>
      </nav>
      <div class="burger-wrapper" @click="showing()">
      <div
        class="
          burger
          d-flex
          flex-column
          align-items-center
          justify-content-center
        "
      >
        <div class="burger__item"></div>
        <div class="burger__item"></div>
        <div class="burger__item"></div>
      </div>
    </div>
    </div>
    
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showing() {
      this.show = !this.show;
    },
  },
};
</script>

<style lang="scss">
.header {
  overflow: hidden;
  background-color: #6b705c;
  margin-bottom: 25px;
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 25;

  .container {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    font-size: 30px;
    color: #fff;
  }

  .navbar {
    display: flex;
    align-items: center;

    &__close {
      display: none;
    }

    a {
      &.router-link-exact-active {
        background-color: #a5a58d;
        color: #fff;
        padding: 28px 48px;
      }
    }
  }

  &__anchor {
    font-size: 20px;
    color: #fff;
    padding: 28px 48px;

    &:hover {
      background-color: #a5a58d;
      color: #fff;
      padding: 28px 48px;
    }
  }

  .burger-wrapper {
    display: none;

    .burger {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      background-color: transparent;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      &__item {
        width: 16px;
        height: 3px;
        background-color: #fff;
        border-radius: 6px;
        &:nth-child(2) {
          margin: 3px 0;
        }
      }
    }
  }
}

@media screen and (max-width: 576px) {
  .header {
    .burger-wrapper {
      display: block;
      padding: 12px 0;
    }

    .navbar {
      position: fixed;
      top: 0;
      left: -100%;
      height: 100vh;
      width: 100%;
      background-color: #3d3d3d;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      z-index: 200;
      transition: all .3s linear;

      &__close {
        display: block;
        font-size: 36px;
        font-weight: bold;
        color: #a5a58d;
        text-align: right;
      }
    }
    .nav-rwd {
      left: 0%;
    }
  }
}
</style>
