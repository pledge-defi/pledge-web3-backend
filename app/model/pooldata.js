module.exports = app => {
  const { STRING, BIGINT, DATE } = app.Sequelize;

  const PoolData = app.model.define('pooldata', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    settleAmountLend: BIGINT,
    settleAmountBorrow: BIGINT,
    finishAmountLend: BIGINT,
    finishAmountBorrow: BIGINT,
    liquidationAmounLend: BIGINT,
    liquidationAmounBorrow: BIGINT,
    created_at: DATE,
    updated_at: DATE,
  });

  return PoolData;
};