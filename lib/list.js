/*
 * @Description: 列表
 * @Author: Mankeung
 * @Date: 2020-10-11 13:56:22
 * @LastEditors: Mankeung
 * @LastEditTime: 2020-10-11 22:48:36
 */

const program = require('commander')
const templates = require('../templates.json')
const chalk = require('chalk')
const logSymbols = require("log-symbols")
const table = require('../utils/table')


program.usage('<list template>')

console.log(logSymbols.success, chalk.green('模板列表：'))
console.table(table(templates.tpl, ['name', 'description']))