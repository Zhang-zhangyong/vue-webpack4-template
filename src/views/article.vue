<template>
  <div>
    这是文章页面
    <Detail title="张泳" />
  </div>
</template>

<script lang="ts">
import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator';
import Detail from '@/components/Detail.vue';

@Component({
  components: {
    Detail
  }
})
export default class Article extends Vue {
  mounted(): void {
    console.log(1111);
  }
}
</script>

<style scoped>

</style>