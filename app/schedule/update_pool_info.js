// eslint-disable-next-line strict
const Subscription = require('egg').Subscription;

class UpdatePoolInfo extends Subscription {
  static get schedule() {
    return {
      interval: '10m', // duration
      type: 'all', //  worker
    };
  }

  async subscribe() {
    await this.updateTestNetPoolInfo();// update test net
    await this.updateMainNetPoolInfo();// update main net
  }

  // update pool bases and pool data on test net
  async updateTestNetPoolInfo() {
    // get pool length
    let poolLength;
    try {
      poolLength = await this.app.pledgePoolContract.methods.poolLength()
        .call()
        .then(result => {
          return result;
        });
    } catch (e) {
      return;
    }

    const nowDate = this.getNowFormatDate();

    // get and update
    for (let i = 0; i < parseInt(poolLength); i++) {
      let poolBaseInfo;
      try {
        poolBaseInfo = await this.app.pledgePoolContract.methods.poolBaseInfo(i)
          .call()
          .then(result => {
            return result;
          });
      } catch (e) {
        continue;
      }

      const poolBaseExist = await this.app.model.testnet.PoolBase.findAll({
        where: {
          pool_id: i + 1,
        },
      });

      if (poolBaseExist.length === 0) {
        poolBaseInfo.pool_id = i + 1;
        poolBaseInfo.created_at = nowDate;
        poolBaseInfo.chain_id = '97';
        await this.app.model.testnet.PoolBase.create(poolBaseInfo);
      } else {
        const poolBaseInfoOptions = {
          where: {
            pool_id: i + 1,
          },
        };
        const utdate_time = {
          updated_at: nowDate,
        };
        const poolBaseInfoData = Object.assign(poolBaseInfo, utdate_time);
        await this.app.model.testnet.PoolBase.update(poolBaseInfoData, poolBaseInfoOptions);

        let poolDataInfo;
        try {
          poolDataInfo = await this.app.pledgePoolContract.methods.poolDataInfo(i)
            .call()
            .then(result => {
              return result;
            });
        } catch (e) {
          continue;
        }
        const poolDataExist = await this.app.model.testnet.PoolData.findAll({
          where: {
            pooldatum_id: i + 1,
          },
        });
        if (poolDataExist.length === 0) {
          poolDataInfo.pooldatum_id = i + 1;
          poolDataInfo.created_at = nowDate;
          poolDataInfo.chain_id = '97';
          await this.app.model.testnet.PoolData.create(poolDataInfo);
        } else {
          const poolDataInfoOptions = {
            where: {
              pooldatum_id: i + 1,
            },
          };
          const poolDataInfoData = Object.assign(poolDataInfo, utdate_time);
          await this.app.model.testnet.PoolData.update(poolDataInfoData, poolDataInfoOptions);
        }
      }
    }
  }

  // update pool bases and pool data on main net
  async updateMainNetPoolInfo() {
    // get pool length
    let poolLength;
    try {
      poolLength = await this.app.pledgePoolContractMainnet.methods.poolLength()
        .call()
        .then(result => {
          return result;
        });
    } catch (e) {
      return;
    }

    const nowDate = this.getNowFormatDate();

    // get and update
    for (let i = 0; i < parseInt(poolLength); i++) {
      let poolBaseInfo;
      try {
        poolBaseInfo = await this.app.pledgePoolContractMainnet.methods.poolBaseInfo(i)
          .call()
          .then(result => {
            return result;
          });
      } catch (e) {
        continue;
      }

      const poolBaseExist = await this.app.model.mainnet.PoolBase.findAll({
        where: {
          pool_id: i + 1,
        },
      });
      if (poolBaseExist.length === 0) {
        poolBaseInfo.pool_id = i + 1;
        poolBaseInfo.created_at = nowDate;
        poolBaseInfo.chain_id = '56';
        await this.app.model.mainnet.PoolBase.create(poolBaseInfo);
      } else {
        const poolBaseInfoOptions = {
          where: {
            pool_id: i + 1,
          },
        };
        const utdate_time = {
          updated_at: nowDate,
        };
        const poolBaseInfoData = Object.assign(poolBaseInfo, utdate_time);
        await this.app.model.mainnet.PoolBase.update(poolBaseInfoData, poolBaseInfoOptions);

        let poolDataInfo;
        try {
          poolDataInfo = await this.app.pledgePoolContractMainnet.methods.poolDataInfo(i)
            .call()
            .then(result => {
              return result;
            });
        } catch (e) {
          continue;
        }
        const poolDataExist = await this.app.model.mainnet.PoolData.findAll({
          where: {
            pooldatum_id: i + 1,
          },
        });
        if (poolDataExist.length === 0) {
          poolDataInfo.pooldatum_id = i + 1;
          poolDataInfo.created_at = nowDate;
          poolDataInfo.chain_id = '56';
          await this.app.model.mainnet.PoolData.create(poolDataInfo);
        } else {
          const poolDataInfoOptions = {
            where: {
              pooldatum_id: i + 1,
            },
          };
          const poolDataInfoData = Object.assign(poolDataInfo, utdate_time);
          await this.app.model.mainnet.PoolData.update(poolDataInfoData, poolDataInfoOptions);
        }
      }
    }
  }

  // date format
  getNowFormatDate() {
    const day = new Date();
    let Year = 0;
    let Month = 0;
    let Day = 0;
    let CurrentDate = '';
    Year = day.getFullYear();
    Month = day.getMonth() + 1;
    Day = day.getDate();
    CurrentDate += Year + '-';
    if (Month >= 10) {
      CurrentDate += Month + '-';
    } else {
      CurrentDate += '0' + Month + '-';
    }
    if (Day >= 10) {
      CurrentDate += Day;
    } else {
      CurrentDate += '0' + Day;
    }
    return CurrentDate;
  }
}

module.exports = UpdatePoolInfo;
