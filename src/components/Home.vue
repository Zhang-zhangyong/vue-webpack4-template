<template>
  <div class="home">
    {{ name }}
    <button
      class="btn"
      @click="handleClick"
    >
      点击我
    </button>
    <van-button type="info">信息按钮</van-button>

  </div>
</template>
<script>
// import LoginApi from "../service/login/loginApi";

export default {
  name: "Home",
  data() {
    return {
      name: "HOME"
    };
  },
  async mounted() {
    try {
      // let loginData = await LoginApi.toLogin();
    }
    catch {
      // let err = await LoginApi.toLogin();
    }
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

