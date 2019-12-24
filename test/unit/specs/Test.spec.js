import { mount } from "@vue/test-utils";
import Test from "@/components/Test.vue";

describe("测试vue组件", () => {
  let wrapper = mount(Test);
  let spy;
  beforeEach(() => {
    //jest.fn()语法糖，监听是否被调用
    spy = jest.spyOn(wrapper.vm, "foo2");
  });
  afterEach(() => {
    wrapper.destroy();
    spy.mockClear();
  });
  // test <-->it
  test("测试方法", () => {
    expect(wrapper.vm.sayHello()).toEqual("Hello");
  });

  test("测试data", () => {
    expect(wrapper.vm.name).toEqual("ch");
  });

  test("测试dom", () => {
    expect(wrapper.contains("div")).toBe(true);
    expect(wrapper.find(".a").exists()).toBeTruthy();
    expect(wrapper.find("p").exists()).toBeTruthy();
  });
  /**
   * .not !
   * .toEqual() ==
   * .toHaveLength 字符串和数组长度
   * .toThrow 是否按照预期抛出异常
   * .toMatch 传入一个正则表达式，它允许我们用来进行字符串类型的正则匹配
   * .toBeTruthy()  返回true
   * .toBeFalsy()  返回false
   */
  test("测试text", () => {
    expect(wrapper.contains("div")).toBe(true);
  });

  it("测试props", () => {
    wrapper = mount(Test, {
      propsData: {
        msg: "HelloWorld"
      }
    });
    expect(wrapper.props().msg).toEqual("HelloWorld");
  });
  it("测试@click", () => {
    //jest.fn() 模拟方法
    const mockFn = jest.fn();
    // setMethods方法用mock函数代替真实的方法，然后就可以断言点击按钮后对应的方法有没有被触发、触发几次、传入的参数等等。
    wrapper.setMethods({
      foo: mockFn
    });
    // 触发按钮的点击事件
    wrapper.find(".a").trigger("click");
    // toHaveBeenCalled别名toBeCalled
    expect(mockFn).toHaveBeenCalled();
  });
  it("测试comuted", () => {
    expect(wrapper.vm.getName).toEqual("chhaha");
  });
  it("测试comuted demo 2", () => {
    wrapper.vm.name = "demo";
    expect(wrapper.vm.getName).toEqual("demohaha");
  });
  // it("测试监听器", () => {
  //   wrapper.setData({
  //     name: 'demo'
  //   });
  //   wrapper.vm.$nextTick(() => {
  //     expect(wrapper.vm.testName).toEqual("demowatch");
  //     done();
  //   });
  // });
});
