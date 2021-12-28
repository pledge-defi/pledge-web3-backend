/**
 bridge 定时脚本：
 - 每周日晚上12:00发起一次
 */

// const PledgerBridgeBSC_abi = require('./abi/pledgerBridgeBSC.json');




module.exports = {
  schedule: {
    type: 'all', // 指定所有的 worker 都需要执行
    cron: '0 0 * * * 7' // 周日午夜0点触发
  }, 
  async task(ctx) {
    // const res = await ctx.curl('http://www.api.com/cache', {
    //   dataType: 'json',
    // });
    // ctx.app.cache = res.data;

    // const index = PledgerBridgeBSC.methods.check_upkeep().call().then(function(ret) {
    //   console.log('check upkeep result : ', ret);
    //   return ret;
    // });

    // PledgerBridgeBSC.methods.execute_upkeep(index).send({
    //       from: w3.eth.defaultAccount,
    //       gas: 1000000,
    //     }).then();
  },
};