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
    display: flex;
    flex-direction: column;
    .son {
      color: skyblue;
    }
  }
</style>

