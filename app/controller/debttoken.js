'use strict';

const Controller = require('egg').Controller;

const DEBT_SUCCESS = 200;
const DEBT_ERROR   = 400;

const MESSAGE_NOT_FOUND = "获取失败";
const MESSAGE_FOUND = "获取成功";

class DebtTokenController extends Controller {
    async debtTokenList() {
      const { ctx, service } = this;

      const symbols = await service.debttoken.debtTokenList(); 
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
