/*
 * @Description: 增加
 * @Author: Mankeung
 * @Date: 2020-10-10 23:55:21
 * @LastEditors: Mankeung
 * @LastEditTime: 2020-10-11 22:46:09
 */
const program = require('commander')
const inquirer = require('inquirer')
const chalk = require('chalk')
const logSymbols = require("log-symbols")
const templates = require('../templates.json')
const table = require('../utils/table.js')
const fs = require('fs')


program.usage('<add a new template>')

console.log(logSymbols.success, chalk.green('现有模板列表：'))
console.table(table(templates.tpl, ['name']))
console.log('\n')

inquirer.prompt([
  {
    name: 'templateName',
    message: '模板名称',
    default: ''
  },
  {
    name: 'templateDescription',
    message: '模板简介',
    default: ''
  },
  {
    name: 'templateUrl',
    message: '模板地址',
    default: ''
  },
  {
    name: 'templateBranch',
    message: '模板分支',
    default: 'master'
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
    console.log(logSymbols.success, chalk.green(`创建模板${templateName}成功！\n`))
  })
})
