<template>
  <div id="app">
    <h1>{{ message }}</h1>
    <router-view />
  </div>
</template>

<script lang="ts">
import Detail from "@/components/Detail.vue";
import { Vue, Component, Watch } from "vue-property-decorator";
import { Route } from 'vue-router';

@Component({
  components: {
    Detail
  }
})
export default class App extends Vue {
  @Watch("$route")
  private onChildChanged(val: Route, oldVal: Route) {
  }
  private message = "Hello TypeScript";
  private show: boolean = false;
  mounted(): void {
    // console.log(this.$route);
    // console.log(this.$store);
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  h1 {
    margin-bottom: .4rem;
  }
}
</style>
