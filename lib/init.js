/*
 * @Description: 创建
 * @Author: Mankeung
 * @Date: 2020-10-10 20:15:45
 * @LastEditors: Mankeung
 * @LastEditTime: 2020-10-11 22:47:23
 */
const program = require('commander')
const path = require('path')
const fs = require('fs')
const glob = require('glob') // npm i glob -D
const download = require('../utils/download')
const inquirer = require('inquirer')
const chalk = require('chalk')
const generator = require('../utils/generator')
const logSymbols = require("log-symbols")
const table = require('../utils/table')
const templates = require('../templates.json')

program.usage('<project-name>')

// 根据输入，获取项目名称
let projectName = process.argv[2]
let init = false // 标记默认

if (!projectName) { // project-name 必填
  // 相当于执行命令的--help选项，显示help信息，这是commander内置的一个命令选项
  program.help()
  return
}

const list = glob.sync('*') // 遍历当前目录
let next = undefined
let rootName = path.basename(process.cwd())

if (list.length) { // 当前目录不为空
  if (list.some(n => {
    const fileName = path.resolve(process.cwd(), n)
    const isDir = fs.statSync(fileName).isDirectory()
    return projectName === n && isDir
  })) return console.log(logSymbols.error, chalk.red(`项目${projectName}已经存在`))

  rootName = projectName
  next = Promise.resolve(projectName)
} else if (rootName === projectName) {
  rootName = '.'
  next = inquirer.prompt([
    {
      name: 'buildInCurrent',
      message: '当前目录为空，且目录名称和项目名称相同，是否直接在当前目录下创建新项目？',
      type: 'confirm',
      default: true
    }
  ]).then(answer => {
    return Promise.resolve(answer.buildInCurrent ? '.' : projectName)
  })
} else {
  rootName = projectName
  next = Promise.resolve(projectname)
}

next && go()

// 创建项目
function go () {
  next.then(projectRoot => {
    if (projectRoot !== '.') {
      fs.mkdirSync(projectRoot)
    }
    console.log(logSymbols.success, chalk.green('现有模板列表：'))
    console.table(table(templates.tpl, ['name']))
    console.log('\n')
    inquirer.prompt([
      {
        name: 'templateName',
        message: '模板名称',
        default: 'init'
      }
    ]).then(answers => {
      let { templateName } = answers
      templateName = templateName || 'init'

      if (templateName === 'init') init = true

      if (!templates.tpl[templateName]) return Promise.reject({
        message: '你需要创建的模板没有哦'
      })
      const url = `${templates.tpl[templateName].url}#${templates.tpl[templateName].branch}`;
      return download(projectRoot, url).then(target => {
        return {
          name: projectRoot,
          root: projectRoot,
          downloadTemp: target
        }
      })
    }).then(context => {
      return inquirer.prompt([
        {
          name: 'projectName',
          message: '项目的名称',
          default: context.name
        }, {
          name: 'projectVersion',
          message: '项目的版本号',
          default: '1.0.0'
        }, {
          name: 'projectDescription',
          message: '项目的简介',
          default: `A project name ${context.name}`
        }
      ]).then(answers => {
        return {
          ...context,
          metadata: {
            ...answers
          }
        }
      })
    }).then(context => {
      //删除临时文件夹，将文件移动到目标目录下
      return generator(context)
    }).then(context => {
      // 成功用绿色显示，给出积极的反馈
      console.log(logSymbols.success, chalk.green('创建成功:)'))
      if (!init) console.log(chalk.green('cd ' + context.root + '\nnpm install | yarn \nnpm run start yran start'))
    }).catch(err => {
      // 失败了用红色，增强提示
      console.log(err)
      console.log('\n')
      console.error(logSymbols.error, chalk.red(`创建失败：${err.message}`))
      process.exit()
    })
  })
}