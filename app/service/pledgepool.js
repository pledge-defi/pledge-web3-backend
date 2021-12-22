const Service = require('egg').Service;

class PledgePoolService extends Service {
    async search(poolID, poolStatus, start, step) {
        const curPage = start - 1;
        const pageSize = step;
        const offset = curPage * pageSize;

        const Op = this.app.Sequelize.Op;
        const poolInfo = await this.ctx.model.PoolBase.findAndCountAll({
            attributes: ["settleTime", "endTime","interestRate","maxSupply","lendSupply","borrowSupply","martgageRate","lendToken","borrowToken","state","spCoin","jpCoin","autoLiquidateThreshold"],
            include: {
              attributes: ["settleAmountLend", "settleAmountBorrow", "finishAmountLend", "finishAmountBorrow", "liquidationAmounLend", "liquidationAmounBorrow"],
              model: this.ctx.model.PoolData,
              as: 'pooldata',
            },
            where: {
              lendToken: poolID,
              state: poolStatus,
            },
            offset: offset,
            limit : pageSize,
        });

        return poolInfo;
    }
}

module.exports = PledgePoolService;
