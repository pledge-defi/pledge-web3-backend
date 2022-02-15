// app/service/contract.js
// eslint-disable-next-line strict
const Service = require('egg').Service;

class DebtTokenService extends Service {
  // 默认testnet
  async debtTokenList(chainID = 97) {
    // return await this.app.debtTokenContract.methods.symbol().call().then((result) => {
    // const token_symbol = {"symbol": result};
    //       return token_symbol;
    //   });

    // const Op = this.app.Sequelize.Op;
    if (chainID === 97) {
      return await this.ctx.model.testnet.DebtToken.findAndCountAll({
        attributes: [ 'symbol', 'address' ],
      });
    } else if (chainID === 56) {
      return await this.ctx.model.mainnet.DebtToken.findAndCountAll({
        attributes: [ 'symbol', 'address' ],
      });
    }

    return null;
  }
}

module.exports = DebtTokenService;
