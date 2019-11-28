<template>
  <div class="detail">
    <div class="son">
      Detail
    </div>
  </div>
</template>
<script>

export default {
  name: 'Detail',
  data() {
    return {
      name: '张泳'
    };
  },
  mounted () {
  },
  methods: {
  },
};
</script>
<style lang="scss" scoped>
  .detail {
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    font-size: 24px;
    .son {
      color: skyblue;
    }
  }
</style>

