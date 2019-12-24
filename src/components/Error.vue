<template>
  <div>
    <div class="error">
      <img class="error-img" src="../img/error/internet.png" />
      <div class="words">页面丢失啦~</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Error",
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.error {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #999999;
  padding-top: 1.52rem;
  .error-img {
    display: block;
    width: 1.24rem;
    height: 1.24rem;
  }
  .words {
    font-size: 0.15rem;
    line-height: 0.21rem;
    margin-top: 0.2rem;
    -webkit-text-stroke: 0.3px rgba(151, 151, 151, 1);
  }
}
</style>
