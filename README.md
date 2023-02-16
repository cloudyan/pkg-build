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
   3. 要考虑构建输出 sourceMap
      1. babel
      2. webpack
      3. typescript
6. father
   1. 双模式构建: Bundless 及 Bundle 两种构建模式
      1. ESModule 和 CommonJS 产物使用 Bundless 模式
      2. UMD 产物使用 Bundle 模式
   2. 多构建核心
      1. Bundle 模式使用 webpack 做构建核心
      2. Bundless 模式支持 esbuild, Babel 及 SWC 三种构建核心，可通过配置自由切换
   3. 类型生成: 无论是源码构建还是依赖预打包，都支持为 TypeScript 模块生成 .d.ts 类型定义
   4. 持久缓存: 所有产物类型均支持持久缓存，二次构建或增量构建只需『嗖』的一下
   5. 项目体检: 对 NPM 包研发常见误区做检查，让每一次发布都更加稳健
   6. 微生成器: 为项目追加生成常见的工程化能力，例如使用 jest 编写测试
   7. 依赖预打包: 开箱即用的依赖预打包能力，帮助 Node.js 框架/库提升稳定性、不受上游依赖更新影响（实验性）
   8. TODO: sourceMap 正确配置

## package.json 配置说明

配置 package.json

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

## UI 组件库构建输出




## 参考文档

- [现代 JavaScript 库打包指南](https://mp.weixin.qq.com/s/XfxEaFghaAOSwL3_IhtCUw)
