'use strict';

const Controller = require('egg').Controller;

const DEBT_SUCCESS = 200;
const DEBT_ERROR   = 400;

const MESSAGE_NOT_FOUND = "获取失败";
const MESSAGE_FOUND = "获取成功";
const MESSAGE_INVALID_CHAINID = "无效的chainID";

class DebtTokenController extends Controller {
    async debtTokenList() {
      const { ctx, service } = this;
      const { chainID } = ctx.request.body;
      
      // 无效的chainID
      if (chainID != 97 && chainID != 56) {
        const body = {
          code: DEBT_ERROR,
          message: MESSAGE_INVALID_CHAINID,
        };

        ctx.body = body;

        return;
      }

      const symbols = await service.debttoken.debtTokenList(chainID); 
      if(!symbols) {
        const body = {
          code: DEBT_ERROR,
          message: MESSAGE_NOT_FOUND,
        };

        ctx.body = body;

        return;
      }

    const body = {
      code: DEBT_SUCCESS,
      message: MESSAGE_FOUND,
      data: symbols,
    };

      ctx.body = body;
    }
}

module.exports = DebtTokenController;
