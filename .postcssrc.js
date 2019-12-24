// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "parser": 'postcss-scss', //用来解决scss文件单行注释不识别报错，postcss不支持scss的单行注释仅支持原生的css注释
  "plugins": {
    // "postcss-import": {},
    // "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    'postcss-pxtorem': {
      rootValue: 37.5, //vant-UI的官方根字体大小是37.5
      propList: ['*']
    }
  }
}
