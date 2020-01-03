<template>
  <div id="app">
    {{ message }}
    <Detail />
    <router-view />
  </div>
</template>

<script lang="ts">
import Detail from '@/components/Detail.vue';
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: {
    Detail
  }
})
export default class App extends Vue {
  message = 'Hello TypeScript';
  private isShowNav: boolean = false;

}
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
