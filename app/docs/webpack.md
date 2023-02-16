# webpack

- 官站 [webpack](https://webpack.js.org/)
- https://webpack.js.org/guides/author-libraries/#authoring-a-library

webpack 支持打包 lib 库

## 配置

webpack.config.js

```js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack-numbers.js',
  },
};
```

## 命令
