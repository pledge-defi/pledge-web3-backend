'use strict';

const Controller = require('egg').Controller;

// 错误代码
const SEARCH_ERROR = 400;
const SEARCH_SUCCESS = 200;

const MESSAGE_FOUND = '查询成功';
const MESSAGE_POOL_LIST_SUCCESS = '获取PoolList成功';
const MESSAGE_NOT_FOUND = '查询失败';
const MESSAGE_INVALID_CHAINID = '无效的chainID';
const MESSAGE_SUCCESS = 'success';

class ContracteController extends Controller {

  async poolList() {
    const { ctx } = this;
    const { chainID } = ctx.request.body;
    console.log('poolList request: ', ctx.request.body);

    // 无效的chainID
    if (chainID !== 97 && chainID !== 56) {
      const body = {
        code: SEARCH_ERROR, message: MESSAGE_INVALID_CHAINID,
      };

      ctx.body = body;

      return;
    }

    if (chainID === 97) {
      await this.poolListTestnet();
    }

    if (chainID === 56) {
      await this.poolListMainnet();
    }

    const body = {
      code: SEARCH_SUCCESS, message: MESSAGE_POOL_LIST_SUCCESS,
    };

    ctx.body = body;
  }

  async poolListTestnet() {
    const { service } = this;

    const poolLength = await service.contract.length();
    console.log('pool length: ', poolLength);

    // 当前DB中的poolIndex
    const current_index = await this.ctx.model.testnet.PoolBase.findOne({
      order: [ [ 'pool_id', 'DESC' ] ], attributes: [ 'pool_id' ], limit: 1,
    });
    // console.log('current index:', current_index.id);

    let index = 0;
    if (current_index != null) {
      index = current_index.pool_id;
    }
    for (; index < poolLength; index++) {
      const baseInfo = await service.contract.baseInfo(index);
      const dataInfo = await service.contract.dataInfo(index);

      // write to db
      const pool_id = {
        pool_id: index + 1,
      };
      Object.assign(baseInfo, pool_id);
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

    // 当前DB中的poolIndex
    const current_index = await this.ctx.model.mainnet.PoolBase.findOne({
      order: [ [ 'pool_id', 'DESC' ] ], attributes: [ 'pool_id' ], limit: 1,
    });
    // console.log('current index:', current_index.id);

    let index = 0;
    if (current_index != null) {
      index = current_index.pool_id;
    }

    for (; index < poolLength; index++) {
      const baseInfo = await service.contract.baseInfoOnMainnet(index);
      const dataInfo = await service.contract.dataInfoOnMainnet(index);

      // write to db
      const pool_id = {
        pool_id: index + 1,
      };
      Object.assign(baseInfo, pool_id);
      const createdBaseInfo = await this.ctx.model.mainnet.PoolBase.create(baseInfo);
      const dataAttributes = {
        pooldatum_id: createdBaseInfo.pool_id,
      };

      const data = Object.assign(dataInfo, dataAttributes);
      await this.ctx.model.mainnet.PoolData.create(data);
    }
  }

  async setMultiSign() {
    const { ctx } = this;
    const { chain_id } = ctx.request.body;
    console.log('poolList request: ', ctx.request.body);

    // invalid chainID
    if (chain_id !== 97 && chain_id !== 56) {
      const body = {
        code: SEARCH_ERROR, message: MESSAGE_INVALID_CHAINID,
      };
      ctx.body = body;
      return;
    }

    await this.ctx.model.mainnet.PoolMultiSign.destroy({
      where: { chain_id },
    });

    const data = {
      chain_id: ctx.request.body.chain_id,
      sp_name: ctx.request.body.sp_name,
      _spToken: ctx.request.body._spToken,
      jp_name: ctx.request.body.jp_name,
      _jpToken: ctx.request.body._jpToken,
      sp_address: ctx.request.body.sp_address,
      jp_address: ctx.request.body.jp_address,
      spHash: ctx.request.body.spHash,
      jpHash: ctx.request.body.jpHash,
      multi_sign_account: JSON.stringify(ctx.request.body.multi_sign_account),
    };

    // if (multiSign != null) {
    //   let a;
    //   // eslint-disable-next-line prefer-const
    //   a = await this.ctx.model.mainnet.PoolMultiSign.update(data, { where: { chain_id } });
    //   console.log(a, 111);
    // } else {
    let bb;
    // eslint-disable-next-line prefer-const
    bb = await this.ctx.model.mainnet.PoolMultiSign.create(data);
    console.log(bb, 222);
    // }

    const body = {
      code: SEARCH_SUCCESS, message: MESSAGE_SUCCESS,
    };

    ctx.body = body;
  }

  async getMultiSign() {
    const { ctx } = this;
    const { chain_id } = ctx.request.body;
    console.log('poolList request: ', ctx.request.body);

    // invalid chainID
    if (chain_id !== 97 && chain_id !== 56) {
      const body = {
        code: SEARCH_ERROR, message: MESSAGE_INVALID_CHAINID,
      };
      ctx.body = body;
      return;
    }
    const multiSign = await this.ctx.model.mainnet.PoolMultiSign.findOne({
      where: { chain_id },
    });
    let res;
    res = {};
    if (multiSign != null) {

      const dataValues = multiSign.dataValues;
      res = {
        chain_id: dataValues.chain_id,
        sp_name: dataValues.sp_name,
        _spToken: dataValues._spToken,
        jp_name: dataValues.jp_name,
        _jpToken: dataValues._jpToken,
        sp_address: dataValues.sp_address,
        jp_address: dataValues.jp_address,
        spHash: dataValues.spHash,
        jpHash: dataValues.jpHash,
        multi_sign_account: JSON.parse(dataValues.multi_sign_account),
      };
    }

    const body = {
      code: SEARCH_SUCCESS, message: MESSAGE_SUCCESS,
      data: res,
    };

    ctx.body = body;
  }

  // 查询 pool
  async search() {
    const { ctx } = this;
    const { chainID, poolID, state, page, pageSize } = ctx.request.body;
    console.log('search requst: ', ctx.request.body);

    // 无效的chainID
    if (chainID !== 97 && chainID !== 56) {
      const body = {
        code: SEARCH_ERROR, message: MESSAGE_INVALID_CHAINID,
      };

      ctx.body = body;

      return;
    }

    const result = await ctx.service.pledgepool.search(chainID, poolID, state, page, pageSize);
    if (!result) {
      const body = {
        code: SEARCH_ERROR, message: MESSAGE_NOT_FOUND,
      };

      ctx.body = body;

      return;
    }

    const body = {
      code: SEARCH_SUCCESS, message: MESSAGE_FOUND, data: result,
    };

    ctx.body = body;
  }
}

module.exports = ContracteController;
