<template>
  <div class="detail">
    <div class="son">
      Detail
      {{ title }}
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator';

@Component({})
export default class Detail extends Vue {
  @Prop({ default: '' }) title: string
  mounted(): void {
    console.log(1111);
  }
}
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

