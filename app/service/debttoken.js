// app/service/contract.js
const Service = require('egg').Service;

class DebtTokenService extends Service {
  // 默认testnet
  async debtTokenList(chainID=97) {
    // return await this.app.debtTokenContract.methods.symbol().call().then((result) => {
    // const token_symbol = {"symbol": result};
    //       return token_symbol;
    //   });

    // const Op = this.app.Sequelize.Op;
    if (chainID == 97) {
      const symbols = await this.ctx.model.testnet.DebtToken.findAndCountAll({
        attributes: ["symbol", "address"],
      });
      return symbols;  
    }
    else if (chainID == 56) {
      const symbols = await this.ctx.model.mainnet.DebtToken.findAndCountAll({
        attributes: ["symbol", "address"],
      });
      return symbols;  
    }

    return null;
  }
}

module.exports = DebtTokenService;
