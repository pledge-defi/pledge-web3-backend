const Service = require('egg').Service;

class PledgePoolService extends Service {
    async search(poolID, poolStatus, start, step) {
        const curPage = start - 1;
        const pageSize = step;
        const offset = curPage * pageSize;

        const Op = this.app.Sequelize.Op;
        const baseInfo = await this.ctx.model.poolbase.PoolBase.findAndCountAll({
            where: {
              lendToken: poolID,
              state: poolStatus,
            },
            offset: offset,
            limit : pageSize,
        });
        const totalNum = baseInfo.count;
        const dataInfo = await this.ctx.model.poolbase.PoolData.findAndCountAll({
            where: {
              lendToken: poolID,
            },
            offset: offset,
            limit : pageSize,

        });
        const poolInfo = Object.assign(baseInfo, dataInfo);

        return {totalNum, poolInfo};

        // const Op = this.app.Sequelize.Op;
        //  const tps = await this.ctx.model.hoopics.Topic.findAndCountAll({
        //     attributes: ["id"],
        //     include: {
        //         model: this.ctx.model.hoopics.TopicAttributes,
        //         as: 'topic_attributes',
        //         attributes: ["id", "is_private", "is_deleted", "approve_status", "delete_by_admin"],
        //         where: {
        //             is_deleted: 0,
        //             is_private: 0,
        //             approve_status : 1,
        //             delete_by_admin: 0,
        //         }
        //     },
        //     where: {
        //         [Op.or]: [
        //             {
        //                 tag: {
        //                     [Op.substring]: tag
        //                 }
        //             },
        //             {
        //                 description: {
        //                     [Op.substring]: tag
        //                 }
        //             }
        //         ]
        //     },
        //     order:  [['updated_at', 'DESC']],

        //     offset: offset,
        //     limit : pageSize,
        // });

        // const totalNum = tps.count;
        // const rows = tps.rows;
        // for (let index = 0; index < rows.length; index++) { 
        //     const item = rows[index];
        //     ids.push(item.id);
        // }

        // const searchPhotos = await this.ctx.service.hoopics.topic.getPhotos(ids);
        // if(!searchPhotos) return null;

        // return {totalNum, searchPhotos};

        return 0;
    }
}

module.exports = PledgePoolService;
