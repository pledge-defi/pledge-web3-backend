// app/service/contract.js
const Service = require('egg').Service;

class DebtTokenService extends Service {
  async debtTokenList() {
    // return await this.app.debtTokenContract.methods.symbol().call().then((result) => {
    // const token_symbol = {"symbol": result};
    //       return token_symbol;
    //   });

    const Op = this.app.Sequelize.Op;
    const symbols = await this.ctx.model.DebtToken.findAndCountAll({
	attributes: ["symbol", "address"],
    });
    return symbols;
  }
}

module.exports = DebtTokenService;
