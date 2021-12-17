// app/extend/application.js
const Web3 = require('web3');
const WEB3 = Symbol('Application#web3');
const PLEDGEPOOLCONTRACT = Symbol('Application#pledgePoolContract');

const abi = require("../abis/PledgePool.json");

module.exports = {
  get web3() {
    if (!this[WEB3]) {
      let web3 = new Web3(Web3.givenProvider || "https://data-seed-prebsc-1-s1.binance.org:8545");
      this[WEB3] = web3;
    }
    return this[WEB3];
  },

  get pledgePoolContract() {
    if (!this[PLEDGEPOOLCONTRACT]) {
      const contract = new this.web3.eth.Contract(abi, '0x08A5125C84C3DAb4834A28e73A35F4b6d895E7AA');
      this[PLEDGEPOOLCONTRACT] = contract;
    }
    return this[PLEDGEPOOLCONTRACT];
  }
};