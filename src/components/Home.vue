<template>
  <div class="home">
    {{ name }}
    <button
      class="btn"
      @click="handleClick"
    >
      点击我
    </button>
    <img src="../img/logo.png">
  </div>
</template>
<script>
import LoginApi from '../service/login/loginApi';

export default {
  name: "Home",
  data() {
    return {
      name: "HOME"
    };
  },
  mounted() {
    console.log(LoginApi);
    LoginApi.toLogin().then((result) => {
      console.log(result);
    }).catch((err) => {
      console.log(err);
    });
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

