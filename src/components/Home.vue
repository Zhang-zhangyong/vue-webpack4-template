<template>
  <div class="home">
    {{ name }}
    <button class="btn" @click="handleClick">点击我</button>
    <img src="../img/logo.png">
  </div>
</template>
<script>
import person from "../../static/static.json";
import { formater } from "../../static/util";

export default {
  name: "Home",
  data() {
    return {
      name: "HOME"
    };
  },
  mounted() {
    let a = this.a ? '111' : '222';
    
  },
  methods: {
    handleClick() {
      this.$router.push({
        name: "Detail"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  color: burlywood;
  font-weight: 600;
  img {
    display: block;
    margin: 0 auto;
  }
}
</style>

