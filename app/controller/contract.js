'use strict';

const Controller = require('egg').Controller;

// 错误代码
const SEARCH_ERROR = 400;
const SEARCH_SUCCESS = 200;

const MESSAGE_FOUND = "查询成功";
const MESSAGE_POOL_LIST_SUCCESS = "获取PoolList成功";
const MESSAGE_NOT_FOUND = "查询失败";

class ContracteController extends Controller {
  async poolList() {
    const { ctx, service } = this;

    const web3 = this.app.web3;
    const poolLength = await service.contract.length();
	  console.log('pool length: ', poolLength);

    // 当前DB中的poolIndex
    let current_index = await this.ctx.model.PoolBase.findOne({
      order: [['id', 'DESC']],
      attributes: ["id"],
      limit: 1,
    });
    // console.log('current index:', current_index.id);
	
    let index = 0;   
    if (current_index != null) {
      index = current_index.id;
    }
    for (; index < poolLength; index ++) { 
      const baseInfo = await service.contract.baseInfo(index);
      let dataInfo = await service.contract.dataInfo(index);
      // const poolInfo = Object.assign(baseInfo, dataInfo);
      // poolInfos.push(poolInfo);

      // write to db
      const createdBaseInfo = await this.ctx.model.PoolBase.create(baseInfo);
      console.log("baseInfo: ", createdBaseInfo);
      const dataAttributes = {
	pooldatum_id: createdBaseInfo.id,
      };
      const data = Object.assign(dataInfo, dataAttributes);
	    console.log('dataInfo :', dataInfo);
      await this.ctx.model.PoolData.create(data);
    }

    const body = {
      code: SEARCH_SUCCESS,
      message: MESSAGE_POOL_LIST_SUCCESS,
    };

    ctx.body = body;
  }

  // 查询 pool
  async search() {
    const { ctx, service } = this;
    const { poolID, poolStatus, page, pageSize } = ctx.request.body;
	  console.log('search requst: ', ctx.request.body);

    const result = await ctx.service.pledgepool.search(poolID, poolStatus, page, pageSize);
    if(!result) {
        const body = {
          code: SEARCH_ERROR,
          message: MESSAGE_NOT_FOUND,
        };

        ctx.body = body;

        return;
    }

    const body = {
      code: SEARCH_SUCCESS,
      message: MESSAGE_FOUND,
      data: result,
    }

    ctx.body = body;
  }
}

module.exports = ContracteController;
