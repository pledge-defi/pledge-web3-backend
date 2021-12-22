'use strict';

const Controller = require('egg').Controller;

class DebtTokenController extends Controller {
    async debtTokenList() {
      const { ctx, service } = this;

      const symbols = await service.debttoken.debtTokenList();

      ctx.body = symbols;
    }
}

module.exports = DebtTokenController;
