const Service = require('egg').Service;

class PledgePoolService extends Service {
    async search(poolID, poolStatus, start, step) {
        const curPage = start - 1;
        const pageSize = step;
        const offset = curPage * pageSize;

        const Op = this.app.Sequelize.Op;
        const baseInfo = await this.ctx.model.PoolBase.findAndCountAll({
	    include: {
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
	console.log("searched baseinfo:", baseInfo);
        const totalNum = baseInfo.count;
        /*
	 * const dataInfo = await this.ctx.model.PoolData.findAndCountAll({
            where: {
              lendToken: poolID,
            },
            offset: offset,
            limit : pageSize,

        });
	*/
        //Object.assign(baseInfo, dataInfo);

        return {totalNum, baseInfo};
    }
}

module.exports = PledgePoolService;
