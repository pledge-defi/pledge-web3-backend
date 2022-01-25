const Service = require('egg').Service;

class PledgePoolService extends Service {
    // 默认chainID 97, BSC testnet
    async search(chainID=97, poolID, state, start=1, step=10) {
        const curPage = start - 1;
        const pageSize = step;
        const offset = curPage * pageSize;

        let condition = {};
        if (poolID) {
          condition = { 
            lendToken: poolID,
          };
        }
        if (state) {
          Object.assign(condition, { state: state });
        }
        const Op = this.app.Sequelize.Op;

        let modelIns = this.ctx.model.testnet;
        if (chainID == 56) {
          modelIns = this.ctx.model.mainnet;
        }

        // const poolInfo = await this.ctx.model.PoolBase.findAndCountAll({
        const poolInfo = await modelIns.PoolBase.findAndCountAll({
            attributes: ["pool_id", "settleTime", "endTime","interestRate","maxSupply","lendSupply","borrowSupply","martgageRate","lendToken","borrowToken","state","spCoin","jpCoin","autoLiquidateThreshold"],
            include: {
              attributes: ["settleAmountLend", "settleAmountBorrow", "finishAmountLend", "finishAmountBorrow", "liquidationAmounLend", "liquidationAmounBorrow"],
              model: modelIns.PoolData,
              as: 'pooldata',
            },
            // where: {
            //   lendToken: poolID,
            //   state: poolStatus,
            // },
            where: condition,
            offset: offset,
            limit : pageSize,
            order:  [['pool_id', 'DESC']],
        });

        return poolInfo;
    }
}

module.exports = PledgePoolService;
