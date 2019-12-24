import Vue from 'vue';
import Error from '@/components/Error';

describe('Error.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Error);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.words').textContent)
      .toEqual('页面丢失啦~');
  });
});
