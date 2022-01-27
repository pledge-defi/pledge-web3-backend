'use strict';

const Controller = require('egg').Controller;

// 错误代码
const SEARCH_ERROR = 400;
const SEARCH_SUCCESS = 200;

const MESSAGE_FOUND = "查询成功";
const MESSAGE_POOL_LIST_SUCCESS = "获取PoolList成功";
const MESSAGE_NOT_FOUND = "查询失败";
const MESSAGE_INVALID_CHAINID = "无效的chainID";

class ContracteController extends Controller {
  async poolList() {
    const { ctx, service } = this;
    const { chainID } = ctx.request.body;
    console.log('poolList request: ', ctx.request.body);

    // 无效的chainID
    if (chainID != 97 && chainID != 56) {
      const body = {
        code: SEARCH_ERROR,
        message: MESSAGE_INVALID_CHAINID,
      };

      ctx.body = body;

      return;
    }

    if (chainID == 97) {
      await this.poolListTestnet();
    }

    if (chainID == 56) {
      await this.poolListMainnet();
    }

    const body = {
      code: SEARCH_SUCCESS,
      message: MESSAGE_POOL_LIST_SUCCESS,
    };

    ctx.body = body;
  }

  async poolListTestnet() {
    const { service } = this;

    const poolLength = await service.contract.length();
    console.log('pool length: ', poolLength);

    // 当前DB中的poolIndex
    let current_index = await this.ctx.model.testnet.PoolBase.findOne({
      order: [['pool_id', 'DESC']],
      attributes: ["pool_id"],
      limit: 1,
    });
    // console.log('current index:', current_index.id);
  
    let index = 0;   
    if (current_index != null) {
      index = current_index.pool_id;
    }
    for (; index < poolLength; index ++) { 
      const baseInfo = await service.contract.baseInfo(index);
      let dataInfo = await service.contract.dataInfo(index);

      // write to db
      const pool_id = {
        pool_id: index+1,
      };
      const baseData = Object.assign(baseInfo, pool_id);
      const createdBaseInfo = await this.ctx.model.testnet.PoolBase.create(baseInfo);
      const dataAttributes = {
        pooldatum_id: createdBaseInfo.pool_id,
      };
      const data = Object.assign(dataInfo, dataAttributes);
      await this.ctx.model.testnet.PoolData.create(data);
    } 
  }

  async poolListMainnet() {
    const { service } = this;

    const poolLength = await service.contract.lengthOnMainnet();
    console.log('pool length: ', poolLength);

    // 当前DB中的poolIndex
    let current_index = await this.ctx.model.mainnet.PoolBase.findOne({
      order: [['pool_id', 'DESC']],
      attributes: ["pool_id"],
      limit: 1,
    });
    // console.log('current index:', current_index.id);
  
    let index = 0;   
    if (current_index != null) {
      index = current_index.pool_id;
    }

    for (; index < poolLength; index ++) { 
      const baseInfo = await service.contract.baseInfoOnMainnet(index);
      let dataInfo = await service.contract.dataInfoOnMainnet(index);

      // write to db
      const pool_id = {
        pool_id: index+1,
      };
      const baseData = Object.assign(baseInfo, pool_id);
      const createdBaseInfo = await this.ctx.model.mainnet.PoolBase.create(baseInfo);
      const dataAttributes = {
        pooldatum_id: createdBaseInfo.pool_id,
      };

      const data = Object.assign(dataInfo, dataAttributes);
      await this.ctx.model.mainnet.PoolData.create(data);
    } 
  }

  // 查询 pool
  async search() {
    const { ctx, service } = this;
    const { chainID, poolID, state, page, pageSize } = ctx.request.body;
	  console.log('search requst: ', ctx.request.body);

    // 无效的chainID
    if (chainID != 97 && chainID != 56) {
      const body = {
        code: SEARCH_ERROR,
        message: MESSAGE_INVALID_CHAINID,
      };

      ctx.body = body;

      return;
    }
    
    const result = await ctx.service.pledgepool.search(chainID, poolID, state, page, pageSize);
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
