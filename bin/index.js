#!/usr/bin/env node

// 请求 commander 库
const program = require('commander');

// 从 package.json 文件中请求version 字段的值， -v 和 -- version 都有效
const packageInfo = require('../package.json');
program.version(packageInfo.version, '-v, --version');

console.log(process.argv);

// 解析命令行参数
program.parse(process.argv);
