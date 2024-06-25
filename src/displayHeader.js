const colors = require('colors');

function displayHeader() {
  process.stdout.write('\x1Bc');
  console.log(colors.green('========================================'));
  console.log(colors.green('=      Units Network Testnet BOT       ='));
  console.log(colors.green('=     Created by GreyArch | OxTech     ='));
  console.log(colors.green('=        https://t.me/archhans         ='));
  console.log(colors.green('========================================'));
  console.log();
}

module.exports = displayHeader;
