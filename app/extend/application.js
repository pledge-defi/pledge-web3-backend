// app/extend/application.js
const Web3 = require('web3');
const WEB3 = Symbol('Application#web3');
const PLEDGEPOOLCONTRACT = Symbol('Application#pledgePoolContract');
const DEBTTOKENCONTRACT = Symbol('Application#debtTokenContract');

const abi = require("../abis/PledgePool.json");
const debt_token_abi = require("../abis/DebtToken.json");

const pledgePoolAddress = "0xb996788A2471f34ad301dD5090d85521Da252ED4";

// Bridge 相关
//const privateKey = process.env.PRIVATE_KEY;

module.exports = {
  get web3() {
    if (!this[WEB3]) {
      let web3 = new Web3(Web3.givenProvider || "https://data-seed-prebsc-1-s1.binance.org:8545");

      // 添加 Bridge 账号
      //const account = web3.eth.accounts.privateKeyToAccount(privateKey);
      //web3.eth.accounts.wallet.add(account);
      //web3.eth.defaultAccount = account.address;
        
      this[WEB3] = web3;
    }
    return this[WEB3];
  },

  get pledgePoolContract() {
    if (!this[PLEDGEPOOLCONTRACT]) {
      const contract = new this.web3.eth.Contract(abi, pledgePoolAddress);
      this[PLEDGEPOOLCONTRACT] = contract;
    }
    return this[PLEDGEPOOLCONTRACT];
  },

  get debtTokenContract() {
    if (!this[DEBTTOKENCONTRACT]) {
      const contract = new this.web3.eth.Contract(debt_token_abi, '0xE676Dcd74f44023b95E0E2C6436C97991A7497DA');
      this[DEBTTOKENCONTRACT] = contract;
    }
    return this[DEBTTOKENCONTRACT];
  }
};
