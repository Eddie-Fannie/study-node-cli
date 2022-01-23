#!/usr/bin/env node

// 请求 commander 库
const program = require('commander');
const updateChk = require('../dist/update');

// 从 package.json 文件中请求version 字段的值， -v 和 -- version 都有效
const packageInfo = require('../package.json');
program.version(packageInfo.version, '-v, --version');

// upgrade
program
  .command('upgrade')
  .description(`Check the ${packageInfo.name} version.`)
  .action(() => {
    updateChk();
  });

// 解析命令行参数
program.parse(process.argv);
