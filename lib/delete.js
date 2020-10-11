/*
 * @Description: 删除
 * @Author: Mankeung
 * @Date: 2020-10-11 14:07:10
 * @LastEditors: Mankeung
 * @LastEditTime: 2020-10-11 22:44:22
 */
const program = require('commander')
const inquirer = require('inquirer')
const chalk = require('chalk')
const logSymbols = require("log-symbols")
const templates = require('../templates.json')
const fs = require('fs')
const table = require('../utils/table')

program.usage('<delete a template>')

console.log(logSymbols.success, chalk.green('现有模板列表：'))
console.table(table(templates.tpl, ['name']))
console.log('\n')

inquirer.prompt([
  {
    name: 'templateName',
    message: '模板名称',
    default: ''
  }
]).then(answers => {
  const {templateName} = answers

  if (!templateName) return console.error(logSymbols.error, chalk.red('模板名称不能为空'))
  if (!templates.tpl[templateName]) return console.error(logSymbols.error, chalk.red('你输入的模板名不存在'))
  if (templateName === 'init') return console.error(logSymbols.error, chalk.red('不能删除初始模板'))
  delete(templates.tpl[templateName])

  fs.writeFile(__dirname + '/../templates.json', JSON.stringify(templates), 'utf-8', err => {
    if (err) return console.error(logSymbols.error, chalk.red(err))
    console.log(logSymbols.success, chalk.green(`删除模板${templateName}成功！\n`))
  })
})