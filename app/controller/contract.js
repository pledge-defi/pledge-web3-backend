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

      // write to db
      await this.ctx.model.PoolBase.create(baseInfo);
      await this.ctx.model.PoolData.create(dataInfo);
    }

    ctx.body = poolInfos;
  }

  // 查询 pool
  async search() {
    const { ctx, service } = this;
    const { poolID, poolStatus, page, pageSize } = ctx.request.body;
	  console.log('search requst: ', ctx.request.body);

    const result = await ctx.service.pledgepool.search(poolID, poolStatus, page, pageSize);
    if(!result) {
        return ctx.setBody('5720', '查询PledgePool失败');
    }
    // ctx.body = (200, '查询成功', result);
    ctx.body = result;
  }
}

module.exports = ContracteController;
