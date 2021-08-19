<template>
  <div id="app">
      <Header />
      <router-view />
      <Footer />
  </div>
</template>

<script>
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
export default {
  components: {Header, Footer},

}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: 100vh;
  overflow: auto;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.title {
  font-size: 40px;
  color: #a5a58d;
  font-weight: normal;
}

.subtitle {
  font-size: 20px;
  color: #3d3d3d;
}

</style>
