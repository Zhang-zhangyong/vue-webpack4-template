const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  moduleFileExtensions: [
    'js',
    'json',
    'vue'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  testPathIgnorePatterns: [
    '<rootDir>/test/e2e'
  ],
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  setupFiles: ['<rootDir>/test/unit/setup'],
  mapCoverage: true,
  verbose: true,
  testURL: 'http://localhost/',
  coverageDirectory: '<rootDir>/test/unit/coverage',
  collectCoverageFrom: [
    'src/components/*.{js,vue}',
    '!src/main.js',
    '!src/router/index.js',
    '!**/node_modules/**'
  ]
};

// 关于覆盖率
/* 
  %stmts是语句覆盖率（statement coverage）：是不是每个语句都执行了？

  %Branch分支覆盖率（branch coverage）：是不是每个if代码块都执行了？

  %Funcs函数覆盖率（function coverage）：是不是每个函数都调用了？

  %Lines行覆盖率（line coverage）：是不是每一行都执行了？ 

*/

