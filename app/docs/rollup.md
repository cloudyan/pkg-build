# rollup

- 官网 [rollup](https://www.rollupjs.com/)
- 参见 [rollup-starter-code-splitting](https://github.com/rollup/rollup-starter-code-splitting) 示例

## 配置

- rollup.config.js
- rollup.config.dev.js
- rollup.config.prod.js

```js
export default {
  input: 'src/index.js',
  output: [
    {
      file: 'lib/index.js',
      format: 'cjs'
    },
    {
      file: 'lib/index.min.js',
      format: 'iife',
      name: 'debug_dload',
    },
  ]
};
```

### 配置项

- https://www.rollupjs.com/guide/command-line-reference

```bash
-c, --config <filename>     使用配置文件（如果使用参数但是值没有
                              指定, 默认就是 rollup.config.js）
-d, --dir <dirname>         构建块的目录（如果不存在，就打印到标准输出）
-e, --external <ids>        逗号分隔列出排除的模块 ID
-f, --format <format>       输出类型 (amd, cjs, es, iife, umd, system)
-g, --globals <pairs>       逗号分隔列出 `moduleID:Global` 对
-h, --help                  显示帮助信息
-i, --input <filename>      输入 (替代 <entry file>)
-m, --sourcemap             生成 sourcemap (`-m inline` 生成行内 map)
-n, --name <name>           UMD 导出的名字
-o, --file <output>         单个的输出文件（如果不存在，就打印到标准输出）
-p, --plugin <plugin>       使用指定的插件（可能重复）
-v, --version               显示版本号
-w, --watch                 监听 bundle 中的文件并在文件改变时重新构建
--amd.id <id>               AMD 模块 ID（默认是匿名的）
--amd.define <name>         代替 `define` 使用的功能
--assetFileNames <pattern>  构建的资源命名模式
--banner <text>             插入 bundle 顶部（包装器之外）的代码
--chunkFileNames <pattern>  次要构建块的命名模式
--compact                   压缩包装器代码
--context <variable>        指定顶层的 `this` 值
--entryFileNames <pattern>  入口构建块的命名模式
--environment <values>      设置传递到配置文件 (看示例)
--no-esModule               不增加 __esModule 属性
--exports <mode>            指定导出的模式 (auto, default, named, none)
--extend                    通过 --name 定义，拓展全局变量
--no-externalLiveBindings   不生成实施绑定的代码
--footer <text>             插入到 bundle 末尾的代码（包装器外部）
--no-freeze                 不冻结命名空间对象
--no-hoistTransitiveImports 不提升传递性的导入到入口构建块
--no-indent                 结果中不进行缩进
--no-interop                不包含互操作块
--inlineDynamicImports      使用动态导入时创建单个 bundle
--intro <text>              在 bundle 顶部插入代码（包装器内部）
--minifyInternalExports     强制或者禁用内部导出的压缩
--namespaceToStringTag      为命名空间创建正确的 `.toString` 方法
--noConflict                为 UMD 全局变量生成 noConflict 方法
--outro <text>              在 bundle 的末尾插入代码（包装器内部）
--preferConst               使用 `const` 代替 `var` 进行导出
--no-preserveEntrySignatures 避免表面的构建块作为入口
--preserveModules           保留模块结构
--preserveSymlinks          解析文件时不要遵循符号链接
--shimMissingExports        给丢失的导出创建填充变量
--silent                    不打印警告
--sourcemapExcludeSources   source map 中不包含源码
--sourcemapFile <file>      source map 中指定 bundle 的路径
--no-stdin                  不从标准输入中读取 "-"
--no-strict                 在生成的模块中不使用 `"use strict";`
--strictDeprecations        不推荐使用的特性抛出错误
--systemNullSetters         用 `null` 替换空的 SystemJS setter
--no-treeshake              禁用 tree-shaking 优化
--no-treeshake.annotations  忽略纯的调用注释
--no-treeshake.moduleSideEffects 假设模块没有副作用
--no-treeshake.propertyReadSideEffects 忽略属性访问的副作用
--no-treeshake.tryCatchDeoptimization 不关闭 try-catch-tree-shaking
--no-treeshake.unknownGlobalSideEffects 假设未知的全局变量不抛出
--waitForBundleInput        等待 bundle 的输入文件
--watch.buildDelay <number> 监听重新构建的延时
--no-watch.clearScreen      重新构建时不进行清屏
--watch.skipWrite           监听时不写入文件到磁盘
--watch.exclude <files>     监听时排除的文件
--watch.include <files>     限制监听指定的文件
```

## 命令

```bash
rollup --config
```

## 常用插件

- `@rollup/plugin-json` 支持 json
- `rollup-plugin-terser` 压缩代码
- `@rollup/plugin-node-resolve` 支持引入外部模块（npm 包）
- `@rollup/plugin-commonjs` 将 CommonJS 转换为 ES2015
- `@rollup/plugin-babel` 处理最新 js 特性的兼容性
- `@rollup/plugin-typescript` 处理 typescript 支持

其他功能

- `external` 指定哪些包不被打包，当做外部引入
- 与 gulp 配合使用

```js
const gulp = require('gulp');
const rollup = require('rollup');
const rollupTypescript = require('@rollup/plugin-typescript');

gulp.task('build', async function () {
  const bundle = await rollup.rollup({
    input: './src/main.ts',
    plugins: [
      rollupTypescript()
    ]
  });

  await bundle.write({
    file: './dist/library.js',
    format: 'umd',
    name: 'library',
    sourcemap: true
  });
});
```
