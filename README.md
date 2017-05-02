# Vue-multi-page

Vue2.x & Webpack2.x 多页面工程

## 简介

基于Vue2.x 和Webpack2.x创建的示例工程，整合了常用的基础组件，避免每次都重复组合，拿来即用。

## 主要特性

    1. 支持Vue2.x, Webpack2.x
    2. 提取公共模块vue.js，对系统公用模块进行抽象
    3. 支持scss，无缝切换到less，css等
    4. 多页面可使用vue-router路由
    5. 使用`axios`
    6. 加入eslint, airbnb级，自动修正错误

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
 ├──views    # 页面
 │   ├──web    # 模块
 │   │   └──index    # 页面
 │   │      ├──index.html
 │   │      ├──index.js
 │   │      └──indexApp.vue
 │   └──embed    
 │      ├──live    
 │      │   ├──live.html
 │      │   ├──live.js
 │      │   └──liveApp.vue	
 │      └──chat    
 │          ├──chat.html
 │          ├──chat.js
 │          └──chatApp.vue
 ├──store # store
 │    ├──modules # 模块store
 │    ├──index.js # store.js
 │    └──types.js 
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

views目录结构: `views/module/page/page.html`编辑之后为：http://localhost:7071/module/page.html，

每个页面包含至少三个文件：page.html, page.js, pageApp.vue;为方便管理代码，会将基础文件放入page文件夹中隔离，编译会将page文件夹路径省略，使用`module/page.html`作为入口。

> 注：入口对index模块做了单独处理，省略了index模块路径，即：`views/index/page/index.html`编译后为: http://localhost:7071/index.html

## Vue.js预处理

在assets/js/vue.js中，对Vue对象进行了预处理，加入了常用的插件和系统插件。

store中为全局store，使用方式参考web目录,推荐使用动态注册方式为每个目录注册，形成总-分结构。

```javascript
import store from '../../../store';
// 动态注册store模块
store.registerModule('web', web);
new Vue({ ...App, store }).$mount('#app');
```

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