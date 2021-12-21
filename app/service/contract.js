// app/service/contract.js
const Service = require('egg').Service;

// const DATA_INFO = ['settleAmountLend', 'settleAmountBorrow', 'finishAmountLend', 'finishAmountBorrow', 'liquidationAmounLend', 'liquidationAmounBorrow'];

class ContractService extends Service {
  // 获取 pool 的总数
  async length() {
    return await this.app.pledgePoolContract.methods.poolLength().call().then((result) => {
      return result;
    });
  }

  // 获取 pool data info
  async dataInfo(index) {
      return await this.app.pledgePoolContract.methods.poolDataInfo(index).call({from: '0x08A5125C84C3DAb4834A28e73A35F4b6d895E7AA'}).then((info) => {
        let obj = {};

        obj['settleAmountLend'] = info['settleAmountLend'];
        obj['settleAmountBorrow'] = info['settleAmountBorrow'];
        obj['finishAmountLend'] = info['finishAmountLend'];
        obj['finishAmountBorrow'] = info['finishAmountBorrow'];
        obj['liquidationAmounLend'] = info['liquidationAmounLend'];
        obj['liquidationAmounBorrow'] = info['liquidationAmounBorrow'];

        return obj;
      });
  }

  // 获取 pool base data
  async baseInfo(index) {
      return await this.app.pledgePoolContract.methods.poolBaseInfo(index).call({from: '0x08A5125C84C3DAb4834A28e73A35F4b6d895E7AA'}).then((info) => {
        let obj = {};
        obj['settleTime'] = info['settleTime'];
        obj['endTime'] = info['endTime'];
        obj['interestRate'] = info['interestRate'];
        obj['maxSupply'] = info['maxSupply'];
        obj['lendSupply'] = info['lendSupply'];
        obj['borrowSupply'] = info['borrowSupply'];
        obj['martgageRate'] = info['martgageRate'];
        obj['lendToken'] = info['lendToken'];
        obj['borrowToken'] = info['borrowToken'];
        obj['state'] = info['state'];
        obj['spCoin'] = info['spCoin'];
        obj['jpCoin'] = info['jpCoin'];
        obj['autoLiquidateThreshold'] = info['autoLiquidateThreshold'];

        return obj;
      });
  }
}

module.exports = ContractService;