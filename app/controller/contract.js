'use strict';

const Controller = require('egg').Controller;

class ContracteController extends Controller {
  async pool_info() {
    const { ctx, service } = this;

    const web3 = this.app.web3;
    const poolLength = await service.contract.length();
    let poolInfos = [];
    let index = 0;
    for (; index < poolLength; index ++) { 
      const baseInfo = await service.contract.baseInfo(index);
      const dataInfo = await service.contract.dataInfo(index);
      const poolInfo = Object.assign(baseInfo, dataInfo);
      poolInfos.push(poolInfo);
    }

    ctx.body = poolInfos;
  }
}

module.exports = ContracteController;