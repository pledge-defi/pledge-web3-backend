'use strict';

const Controller = require('egg').Controller;

class DebtTokenController extends Controller {
    async symbols() {
      const { ctx, service } = this;

      const symbols = await service.debttoken.symbols();

      ctx.body = symbols;
    }
}

module.exports = DebtTokenController;
