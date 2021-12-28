/**
 bridge 定时脚本：
 - 每周日晚上12:00发起一次
 */

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

    
  },
};