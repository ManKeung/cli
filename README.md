# 脚手架工具

个人项目初始模板

## 安装

```bash
# 全局安装
npm install -g mankeung-cli
```

## 新增模板

```bash
# 新增模板
mk add | mk a

# 1. 输入模板名称 [必填]
# 2. 输入模板简介 [可不填]
# 3. 输入模板地址 [必填] 模板地址注意
# GitHub - github:owner/name or simply owner/name
# GitLab - gitlab:owner/name
# Bitbucket - bitbucket:owner/name
# 详细了解 download-git-repo
# 4. 输入模板分支 [必填 默认 master]
```

## 删除

```bash
# 删除模板
mk delete | mk d
# 1. 输入需要删除模板名 注意 默认 init 不能删除
```
## 修改

```bash
# 编辑模板 默认不让编辑 init
mk edit | mk e
# 1. 输入需要修改模板名
# 2. 填写修改信息
```

## 列表

```bash
# 查询模板列表
mk list | mk l
```

## 创建项目

```bash
# 命令
mk init projectName[项目名称] | mk i projectName[项目名称]
# 1. 输入需要的模板名
# 2. 下载模板
# 3. 根据提示输入package.json参数
```

## 基础模板

模板名 | 描述 | 分支
--- | --- | ---
init | 空模板 | init
gulp | gulp配置 | gulp
webpack | webpack4配置 | webpack
webpack-ts | webpack-ts配置 | webpack-ts
vue | vue配置 | vue
vue-admin | vue后台管理 | vue-admin
vue-ts | vue-ts配置 | vue-ts
react | react配置 | react
react-ts | react-ts配置 | react-ts
koa | koa | koa
koa-ts | koa-ts配置 | koa-ts
koa-page-ts | koa-page-ts配置 | koa-page-ts