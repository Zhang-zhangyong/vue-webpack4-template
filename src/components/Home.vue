<template>
  <div class="home">
    <div class="header"></div>
    <van-button class="btn" type="info"@click="handleClick">跳转详情页</van-button>
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
  padding-top: 20px;
  .header {
    width: 335px;
    height: 101px;
    background:linear-gradient(224deg,rgba(129,144,170,1) 0%,rgba(103,116,139,1) 100%);
    border-radius:4px;
    margin: 0 auto;
  }
  img {
    display: block;
    margin: 0 auto;
  }
  .btn {
    margin-top: 20px;
  }
}
</style>

