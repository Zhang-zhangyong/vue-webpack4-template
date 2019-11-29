# vue-cli-zy
  基于webpack4.0 学习搭建的vue-cli模板
  > webpack4.0 更新了好久了，之前写项目都是基于vue-cli改造开发，从未自己动手从零开始搭建一个自己的vue-cli,于是工作之余，忙里偷闲，搭建一个脚手架学习webpack4构建一个轻量级工具，中间遇到不少webpack4.0的坑大都在文件中注释


# 项目结构
```
├── build                                       // webpack配置目录
│   ├── build.js                                // 打包文件
│   ├── webpack.config.base.js                  // 公共配置
│   ├── webpak.config.dev.js                    // 开发模式
│   ├── webpak.config.prod.js                   // 打包模式
├── dist                                        // 项目打包路径(自动生成)
├── src                                         // 源码目录(自定义)
├── babelrc                                     // 配置babel-loader以及ui组件库配置
├── eslintirc.js                                // eslint配置（eslint-plugin-vue）
├── postcss.config                              // 样式添加前缀以及pxTorRem移动端适配


```
# 项目运行

```
  下载模板

  git clone https://github.com/Zhang-zhangyong/vue-webpack4-template.git

  安装依赖

  yarn install 

  开发模式

  yarn dev

  生产模式打包

  yarn build

```

# 写在最后

>  如果对您有帮助，后面会持续更新，您可以点右上角 "Star" 支持一下 谢谢！ ^_^

>  后面会尝试把项目改造成多页面应用，来满足更多的需求
