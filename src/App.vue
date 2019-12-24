<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <a href="">12312312</a>
    <Test />
    <router-view />
  </div>
</template>

<script>
import Test from '@/components/Test';
export default {
  name: 'App',
  components: {
    Test
  }
};
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
