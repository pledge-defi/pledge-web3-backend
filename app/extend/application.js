// app/extend/application.js
// eslint-disable-next-line strict
const Web3 = require('web3');
const WEB3 = Symbol('Application#web3');
const WEB3MAINNET = Symbol('Application#web3Mainnet');

const PLEDGEPOOLCONTRACT = Symbol('Application#pledgePoolContract');
const PLEDGEPOOLCONTRACTMAINNET = Symbol('Application#pledgePoolContractMainnet');

const DEBTTOKENCONTRACT = Symbol('Application#debtTokenContract');

const abi = require('../abis/PledgePool.json');
const debt_token_abi = require('../abis/DebtToken.json');

const pledgePoolAddress = '0xb996788A2471f34ad301dD5090d85521Da252ED4'; // v21
// const pledgePoolAddress = '0x216f718A983FCCb462b338FA9c60f2A89199490c'; // v22
const pledgePoolAddressMainnet = '0x78CE5055149Dc30755612209f9d9A98f36fb022E';

// Bridge 相关
// const privateKey = process.env.PRIVATE_KEY;

module.exports = {
  get web3() {
    if (!this[WEB3]) {
      const web3 = new Web3(Web3.givenProvider || 'https://data-seed-prebsc-1-s1.binance.org:8545');

      // 添加 Bridge 账号
      // const account = web3.eth.accounts.privateKeyToAccount(privateKey);
      // web3.eth.accounts.wallet.add(account);
      // web3.eth.defaultAccount = account.address;

      this[WEB3] = web3;
    }
    return this[WEB3];
  },

  get web3Mainnet() {
    if (!this[WEB3MAINNET]) {
      const web3 = new Web3(Web3.givenProvider || 'https://bsc-dataseed.binance.org/');

      // 添加 Bridge 账号
      // const account = web3.eth.accounts.privateKeyToAccount(privateKey);
      // web3.eth.accounts.wallet.add(account);
      // web3.eth.defaultAccount = account.address;

      this[WEB3MAINNET] = web3;
    }
    return this[WEB3MAINNET];
  },

  get pledgePoolContract() {
    if (!this[PLEDGEPOOLCONTRACT]) {
      this[PLEDGEPOOLCONTRACT] = new this.web3.eth.Contract(abi, pledgePoolAddress);
    }
    return this[PLEDGEPOOLCONTRACT];
  },

  get pledgePoolContractMainnet() {
    if (!this[PLEDGEPOOLCONTRACTMAINNET]) {
      const contract = new this.web3Mainnet.eth.Contract(abi, pledgePoolAddressMainnet);
      this[PLEDGEPOOLCONTRACTMAINNET] = contract;
    }
    return this[PLEDGEPOOLCONTRACTMAINNET];
  },

  get debtTokenContract() {
    if (!this[DEBTTOKENCONTRACT]) {
      const contract = new this.web3.eth.Contract(debt_token_abi, '0xE676Dcd74f44023b95E0E2C6436C97991A7497DA');
      this[DEBTTOKENCONTRACT] = contract;
    }
    return this[DEBTTOKENCONTRACT];
  },
};
