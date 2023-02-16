# babel

- 官网 [babel](https://babeljs.io/)

## 配置

.babel.config.js

```js
module.exports = {
  sourceMaps: true,
  presets: [
    [
      '@babel/preset-env',
    ]
  ],
  plugins: [

  ]
};

```

## 命令

```bash
# dev
babel src -s inline -d ./lib --ignore __tests__

# build
babel src -d lib --ignore __tests__
```
