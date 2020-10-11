/*
 * @Description: 增加
 * @Author: Mankeung
 * @Date: 2020-10-10 23:55:21
 * @LastEditors: Mankeung
 * @LastEditTime: 2020-10-11 18:21:25
 */
const program = require('commander')
const inquirer = require('inquirer')
const chalk = require('chalk')
const logSymbols = require("log-symbols")
const templates = require('../templates.json')
const fs = require('fs')
const table = require('../utils/table')


program.usage('<edit a template>')

console.log(logSymbols.success, chalk.green('现有模板列表：'))
console.table(table(templates.tpl))

inquirer.prompt([
  {
    name: 'templateName',
    message: '选择编辑模板',
    default: ''
  }
]).then(answer => {
  const {templateName} = answer

  if (!templateName) return console.error(logSymbols.error, chalk.red('请输入需要编辑的模板名'))
  if (templateName === 'init') return console.error(logSymbols.error, chalk.red('默认模板不能编辑哦'))
  if (!templates.tpl[templateName]) return console.error(logSymbols.error, chalk.red('你输入的模板名不存在'))

  const edit = templates.tpl[templateName]
  delete(templates.tpl[templateName])

  inquirer.prompt([
    {
      name: 'templateName',
      message: '模板名称',
      default: templateName
    },
    {
      name: 'templateDescription',
      message: '模板简介',
      default: edit.description
    },
    {
      name: 'templateUrl',
      message: '模板地址',
      default: edit.url
    },
    {
      name: 'templateBranch',
      message: '模板分支',
      default: edit.branch
    }
  ]).then(answers => {
    const {templateName, templateUrl, templateDescription, templateBranch} = answers
    if (!templateName) return console.error(logSymbols.error, chalk.red('模板名称不能为空'))
    if (!templateUrl) return console.error(logSymbols.error, chalk.red('模板地址不能为空'))
    // 避免重复添加
    if (templates.tpl[templateName]) return console.error(logSymbols.error, chalk.red('你输入的模板名已存在'))
    templates.tpl[templateName] = {}
    templates.tpl[templateName]['url'] = templateUrl.replace(/[\u0000-\u0019]/g, '') // 过滤unicode字符
    templates.tpl[templateName]['description'] = templateDescription
    templates.tpl[templateName]['branch'] = templateBranch

    fs.writeFile(__dirname + '/../templates.json', JSON.stringify(templates), 'utf-8', err => {
      if (err) return console.error(logSymbols.error, chalk.red(err))
      console.log(logSymbols.success, chalk.green(`编辑模板${templateName}成功！\n`))
    })
  })
})