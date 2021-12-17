'use strict';

const abi = require("../abis/PledgePool.json");
const Controller = require('egg').Controller;
const Web3 = require('web3');

class ContracteController extends Controller {
  async pool_info() {
    const { ctx } = this;

    // ctx.body = 'hi, egg';
    // console.log('this cofig = ', ctx.app.config);

    let web3 = new Web3(Web3.givenProvider || "https://data-seed-prebsc-1-s1.binance.org:8545");

    var contract = new web3.eth.Contract(abi, '0x08A5125C84C3DAb4834A28e73A35F4b6d895E7AA');
    contract.methods.poolDataInfo(0).call({from: '0x08A5125C84C3DAb4834A28e73A35F4b6d895E7AA'}).then(function (d) {
      console.log('d = ', d);
      ctx.body = d;
    });

    const poolLength = await contract.methods.poolLength().call().then((result) => {
      console.log('count = ', result);
      return result;
    });

    let poolInfos = [];
    let index = 0;
    for (; index < poolLength; index ++) { 
      await contract.methods.poolDataInfo(index).call({from: '0x08A5125C84C3DAb4834A28e73A35F4b6d895E7AA'}).then((info) => {
        console.log('info = ', info);

        poolInfos.push(info);
      });
    }

    ctx.body = poolInfos;
  }
}

module.exports = ContracteController;