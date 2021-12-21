// app/service/contract.js
const Service = require('egg').Service;

class DebtTokenService extends Service {
  async symbol() {
    return await this.app.debtTokenContract.methods.symbol().call().then((result) => {
	const token_symbol = {"symbol": result};
        return token_symbol;
    });
  }
}

module.exports = DebtTokenService;
