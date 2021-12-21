'use strict';

const Controller = require('egg').Controller;

class DebtTokenController extends Controller {
    async symbol() {
      const { ctx, service } = this;

      const symbol = await service.debttoken.symbol();

      ctx.body = symbol;
    }
}

module.exports = DebtTokenController;
