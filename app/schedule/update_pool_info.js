// eslint-disable-next-line strict
const Subscription = require('egg').Subscription;

class UpdatePoolBase extends Subscription {
  static get schedule() {
    return {
      interval: '3s', // 30s, duration
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
    const poolLength = await this.app.pledgePoolContract.methods.poolLength()
      .call()
      .then(result => {
        return result;
      });

    const nowDate = this.getNowFormatDate();

    // get and update
    for (let i = 1; i < poolLength + 1; i++) {
      const poolBaseInfo = await this.app.pledgePoolContract.methods.poolBaseInfo(i)
        .call()
        .then(result => {
          return result;
        });

      const poolBaseInfoOptions = {
        where: {
          pool_id: parseInt(i),
        },
      };
      const utdate_time = {
        updated_at: nowDate,
      };
      const poolBaseInfoData = Object.assign(poolBaseInfo, utdate_time);
      const updatePoolBaseInfoRes = await this.app.model.testnet.PoolBase.update(poolBaseInfoData, poolBaseInfoOptions);
      console.log(updatePoolBaseInfoRes);

      const poolDataInfo = await this.app.pledgePoolContract.methods.poolDataInfo(i)
        .call()
        .then(result => {
          return result;
        });

      const poolDataInfoOptions = {
        where: {
          pooldatum_id: parseInt(i),
        },
      };
      const poolDataInfoData = Object.assign(poolDataInfo, utdate_time);
      const updatePoolDataInfoRes = await this.app.model.testnet.PoolData.update(poolDataInfoData, poolDataInfoOptions);
      console.log(updatePoolDataInfoRes);

    }
  }

  // update pool bases and pool data on main net
  async updateMainNetPoolInfo() {
    // get pool length
    const poolLength = await this.app.pledgePoolContractMainnet.methods.poolLength()
      .call()
      .then(result => {
        return result;
      });

    const nowDate = this.getNowFormatDate();

    // get and update
    for (let i = 1; i < poolLength + 1; i++) {
      const poolBaseInfo = await this.app.pledgePoolContractMainnet.methods.poolBaseInfo(i)
        .call()
        .then(result => {
          return result;
        });

      const poolBaseInfoOptions = {
        where: {
          pool_id: parseInt(i),
        },
      };
      const utdate_time = {
        updated_at: nowDate,
      };
      const poolBaseInfoData = Object.assign(poolBaseInfo, utdate_time);
      const updatePoolBaseInfoRes = await this.app.model.mainnet.PoolBase.update(poolBaseInfoData, poolBaseInfoOptions);
      console.log(updatePoolBaseInfoRes);

      const poolDataInfo = await this.app.pledgePoolContractMainnet.methods.poolDataInfo(i)
        .call()
        .then(result => {
          return result;
        });

      const poolDataInfoOptions = {
        where: {
          pooldatum_id: parseInt(i),
        },
      };
      const poolDataInfoData = Object.assign(poolDataInfo, utdate_time);
      const updatePoolDataInfoRes = await this.app.model.mainnet.PoolData.update(poolDataInfoData, poolDataInfoOptions);
      console.log(updatePoolDataInfoRes);

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

module.exports = UpdatePoolBase;
