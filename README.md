## 简介

基于Vue2.x 和Webpack2.x创建的示例工程，整合了常用的基础组件，避免每次都重复组合，拿来即用。

## 主要特性

    1. 支持Vue2.x, Webpack2.x
    2. 提取公共模块vue.js，对系统公用模块进行抽象
    3. 支持scss，无缝切换到less，css等
    4. 多页面可使用vue-router路由
    5. 可自定义页面模块名，例如 http:// localhost:7071/`views`/web/index.html，`views`就是我们线上的模块名
    6. 使用`axios`
    7. 基于`webpack2`
    8. 加入eslint, airbnb级，自动修正错误

## Build Setup

> 国内推荐使用cnpm代理npm

``` bash
git clone https://github.com/microacup/vue-multi-page

# 安装依赖
cd vue-multi-page & npm install

# 调试环境
npm run dev

# 打包
npm run build

# 模拟生产环境
npm start
```

## 目录结构
``` 
webpack
 ├──build # build folder
 ├──src # main folder
 │   └──assets          # 公用模块
 │       ├──scss # scss
 │       ├──images # images
 │       └──js         # javascript
 │           ├──vue.js            # 封装了公用模块，可以作为公用模块的入口
 │           ├──config.js         # 项目的配置
 │           ├──utils.js          # 通用工具类
 │           └──filters.js        # vue全局过滤器
 ├──components # 组件
 │   └──Hello.vue # 示例组件
 ├──views    # 各个页面模块
 │   ├──web    # 一级目录
 │   │   └──index    # 二级目录
 │   │      ├──index.html
 │   │      ├──index.js
 │   │      └──indexApp.vue
 │   └──embed    # 一级目录
 │      ├──live    #二级目录
 │      │   ├──live.html
 │      │   ├──live.js
 │      │   └──liveApp.vue	
 │      └──chat    #二级目录
 │          ├──chat.html
 │          ├──chat.js
 │          └──chatApp.vue
 ├──dist # 编译文件目录
 ├──static # .gitkeep
 ├──test # test
 ├──.gitignore
 ├──.babelrc # babel config
 ├──.eslintignore # eslint ignore
 ├──.eslintrc.js # eslint config
 ├──package.json
 └──README.md
```


例如 http:// localhost:7071/`views`/web/index.html，`views`就是我们线上的模块名，如需修改请到项目目录文件config/index.js修改`moduleName`参数，修改这里的配置的同时，也要同时重命名`/src/views`的这个文件夹名称，是否会报错的。

还有一点要注意的，所有的目录都要求为二级，不能一个目录下为一级，另一个目录下有二级。

## 公共模块
我们通常会把常用的库都打包成公共模块，`CommonsChunkPlugin` 插件，是一个可选的用于建立一个独立文件(又称作 chunk)的功能，这个文件包括多个入口 chunk 的公共模块。最终合成的文件能够在最开始的时候加载一次，便存起来到缓存中供后续使用。这个带来速度上的提升，因为浏览器会迅速将公共的代码从缓存中取出来，而不是每次访问一个新页面时，再去加载一个更大的文件。

不同的项目，使用到的插件库数量有所不同，我们可以调整`minChunks`以达到公共模块的大小，文件路径为`/build/webpack.prod.conf.js`，cart+F查找`minChunks`参数，`minChunks: 4` 意思代表为至少被4个页面引用了，就打包进入公共模块，具体的使用方法，可以再详细了解`webpack`中文文档。http://www.css88.com/doc/webpack2/plugins/commons-chunk-plugin/

## TODO
1. Vue-router Demo


2. Vuex Demo

## 推荐

- 代码格式使用默认规则
- 模块使用Vue-router + Vuex模式

## 相关工程

https://github.com/jiananle/vue-multi-page

https://github.com/jarvan4dev/vue-multi-page

https://github.com/luchanan/vue2.0-multi-page

https://github.com/bluefox1688/vue-cli-multi-page/

https://github.com/jawil/webpack2

https://github.com/Plortinus/vue-multiple-pages