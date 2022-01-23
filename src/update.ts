// 引用update-notifier 库，用于检查更新
const updateNotifier = require('update-notifier');
// 引用chalk库，用于控制台字符样式
const chalk = require('chalk');
// 引入package.json文件，用于update-notifier库读取相关信息
const pkg = require('../package.json');

const notifier = updateNotifier({
  pkg,
  updateCheckInterval: 1000, // 设定检查更新周期，默认为 1000 * 60 * 60 * 24(one day)，这里设定为1000ms
});

function updateChk() {
  // 检测到版本时，notifier.update会返回Object
  // 此时可以用notifier.update.latest获取最新版本号
  if (notifier.update) {
    console.log(
      `New version available: ${chalk.cyan(notifier.update.latest)}, it's recommended that you update before using`
    );
    notifier.notify();
  } else {
    console.log('No new version is available');
  }
}

module.exports = updateChk;
