# pkg-build

npm 包构建编译

- [pkg-build](#pkg-build)
  - [包构建](#包构建)
  - [package.json 配置说明](#packagejson-配置说明)
  - [构建输出 esm、cjs 和 umd 格式](#构建输出-esmcjs-和-umd-格式)
  - [UI 组件库构建输出](#ui-组件库构建输出)
  - [参考文档](#参考文档)

## 包构建

包构建是前端工程化的一部分。

这里我们主要包含以下内容：

1. package.json 配置说明
2. 构建输出 esm、cjs 和 umd 格式
3. 纯 JS 基础库构建输出
4. UI 组件库构建输出
5. 构建工具参考
   1. 构建工具
      1. webpack
      2. rollup
      3. esbuild
      4. babel
      5. swc
   2. 三方
      1. [father](https://github.com/umijs/father)
      2. @alib/build-scripts@0.1.18
      3. @ice/pkg@1.2.1

## package.json 配置说明




## 构建输出 esm、cjs 和 umd 格式

- esm 是“EcmaScript module”的缩写。
- cjs 是“CommonJS module”的缩写。
- umd 是“Universal Module Definition”的缩写，它可以在 `<script>` 标签中执行、被 CommonJS 模块加载器加载、被 AMD 模块加载器加载。

以下是一些注意事项

1. 输出多文件。通过保留文件结构更好地支持 treeshaking
2. 是否压缩代码。umd 提供压缩代码 xxx.min.js
3. 创建 sourceMap。辅助调试
4. 创建 TypeScript 类型。获得更好的 DX
5. 外置框架。不要将 React、Vue 等框架打包在你的库中, 加到 peer dependencies 中
6. 面向现代浏览器。新旧浏览器兼容怎么支持？
7. 必要的编译。将 TypeScript、JSX 编译转换为函数调用
8. 维护 changelog。记录更新和变更
9. 拆分出 CSS 文件。让开发者能够按需引入 CSS
10. 配置 package.json
    1. name
    2. version
    3. exports
    4. files
    5. type
    6. sideEffects
    7. main
    8. module
    9. cdn
       1. unpkg
       2. jsdelivr
    10. browser
    11. types
    12. peerDependencies
    13. license

## UI 组件库构建输出




## 参考文档

- [现代 JavaScript 库打包指南](https://mp.weixin.qq.com/s/XfxEaFghaAOSwL3_IhtCUw)
