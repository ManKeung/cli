# vue后台管理基础模板
### 项目详细配置参考vue-cli (https://cli.vuejs.org/)
### 项目UI库使用element-ui (https://element.eleme.cn/)

## 项目权限配置
### 1，菜单权限，配置在meta.permission中，权限验证流程详见src/permission.js

#### 项目结构

#### └─server koa结合mock模拟接口数据
#### └─public 静态文件夹
#### └─build 构建
####    └─webpack.icon.conf.js svg转字体图标
#### └─src 源码
####    ├─api 请求api汇总
####    ├─assets 资源文件
####    │  └─logo.png
####    ├─components 组件文件夹
####    ├─router 路由
####    │  └─modules
####    ├─store vuex文件夹
####    │  └─modules
####    ├─scss 公用css文件
####    ├─utils 工具文件夹
####    └─views 视图文件夹
####    │   ├─layout 布局
####    │   ├─login 登录
####    │   ├─pageI 布局1
####    │   ├─pageII 布局2

# 项目具体的构建流程

# 安装依赖
```
yarn install
```

# 启动模拟接口服务
```
yarn serve
```

# 启动本地开发服务
```
yarn start
```

# Build for production with minification
```
yarn build
```
