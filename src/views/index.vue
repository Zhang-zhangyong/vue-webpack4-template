<template>
  <div class="layout">
    <div> 我是首页 </div>
    <br />
    <br />
    <van-button type="default" @click="goArticle">默认按钮</van-button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Toast } from 'vant';

@Component({})
export default class Index extends Vue {
  private goArticle():void {
    this.$router.push({
      name: 'Article'
    });
  }
  mounted():void {
    Toast('首页');
  }
}
</script>

<style lang="scss" scoped>
.layout {
  background: skyblue;
}
</style>