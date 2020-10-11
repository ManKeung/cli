/*
 * @Description: 命令
 * @Author: Mankeung
 * @Date: 2020-10-10 18:04:17
 * @LastEditors: Mankeung
 * @LastEditTime: 2020-10-11 18:02:53
 */
const { resolve } = require('path')
const program = require('commander')
const { version } = require(resolve(__dirname, '../package.json'))


program.version(version, '-v, --version')
  .usage('<command> [项目名称]')
  .command('init', '创建新项目').alias('i')
  .command('add', '增加自己模板').alias('a')
  .command('delete', '删除模板').alias('d')
  .command('edit', '编辑模板').alias('e')
  .command('list', '模板列表').alias('l')
  .parse(process.argv)