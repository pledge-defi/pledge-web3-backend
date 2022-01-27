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

        if (chainID == 56) {
            const poolInfo = await this.ctx.model.mainnet.PoolBase.findAndCountAll({
              attributes: ["pool_id", "settleTime", "endTime","interestRate","maxSupply","lendSupply","borrowSupply","martgageRate","lendToken","borrowToken","state","spCoin","jpCoin","autoLiquidateThreshold"],
              include: {
                attributes: ["settleAmountLend", "settleAmountBorrow", "finishAmountLend", "finishAmountBorrow", "liquidationAmounLend", "liquidationAmounBorrow"],
                model: this.ctx.model.mainnet.PoolData,
                as: 'pooldata',
              },
              where: condition,
              offset: offset,
              limit : pageSize,
              order:  [['pool_id', 'DESC']],
          });

          return poolInfo;
        }
        else if (chainID == 97) {
            const poolInfo = await this.ctx.model.testnet.PoolBase.findAndCountAll({
              attributes: ["pool_id", "settleTime", "endTime","interestRate","maxSupply","lendSupply","borrowSupply","martgageRate","lendToken","borrowToken","state","spCoin","jpCoin","autoLiquidateThreshold"],
              include: {
                attributes: ["settleAmountLend", "settleAmountBorrow", "finishAmountLend", "finishAmountBorrow", "liquidationAmounLend", "liquidationAmounBorrow"],
                model: this.ctx.model.testnet.PoolData,
                as: 'pooldata',
              },
              where: condition,
              offset: offset,
              limit : pageSize,
              order:  [['pool_id', 'DESC']],
          });

          return poolInfo;
        }

        return null;
    }
}

module.exports = PledgePoolService;
