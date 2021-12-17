// app/service/contract.js
const Service = require('egg').Service;

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
        return info;
      });
  }

  // 获取 pool base data
  async baseInfo(index) {
      return await this.app.pledgePoolContract.methods.poolBaseInfo(index).call({from: '0x08A5125C84C3DAb4834A28e73A35F4b6d895E7AA'}).then((info) => {
        return info;
      });
  }
}

module.exports = ContractService;