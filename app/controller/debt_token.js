'use strict';

const Controller = require('egg').Controller;

class DebtTokenController extends Controller {
    async symbol() {
      const { ctx } = this;

      const symbol = await ctx.service.debt_token.symbol();

      ctx.body = symbol;
    }
}

module.exports = DebtTokenController;
