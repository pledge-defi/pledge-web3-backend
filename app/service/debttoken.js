// app/service/contract.js
const Service = require('egg').Service;

class DebtTokenService extends Service {
  async symbol() {
    return await this.app.debtTokenContract.methods.symbol().call().then((result) => {
        return result;
    });
  }
}

module.exports = DebtTokenService;
