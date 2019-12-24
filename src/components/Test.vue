<template>
  <div class="test">
    {{ msg }}
    <div class="a" @click="foo"></div>
    <p></p>
    <a></a>
  </div>
</template>

<script>
export default {
  name: "Test",
  props: {
    msg: {
      type: String,
      default: '这是个单元测试组件'
    }
  },
  data() {
    // 这里存放数据
    return {
      name: "ch",
      num: 1,
      testName: ""
    };
  },
  // 监听属性 类似于data概念
  computed: {
    getName() {
      return `${this.name}haha`;
    }
  },
  // 监控data中的数据变化
  watch: {
    name: {
      handler(val) {
        console.log(val, 1);
        this.testName = `${val}watch`;
      }
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {}, // 生命周期 - 挂载之前
  beforeUpdate() {}, // 生命周期 - 更新之前
  updated() {}, // 生命周期 - 更新之后
  beforeDestroy() {}, // 生命周期 - 销毁之前
  destroyed() {}, // 生命周期 - 销毁完成
  activated() {},
  // 方法集合
  methods: {
    sayHello() {
      return "Hello";
    },
    foo() {
      this.num = 2;
    },
    foo1() {
      this.foo2();
    },
    foo2() {}
  } // 如果页面有keep-alive缓存功能，这个函数会触发
};
</script>

<style lang="scss" scoped></style>
