
module.exports = app => {
  const { STRING, INTEGER, DATE, BIGINT } = app.Sequelize;

  const PoolBase = app.model.define('poolbase', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    settleTime: BIGINT,
    endTime: BIGINT,
    interestRate: BIGINT,
    maxSupply: BIGINT,
    lendSupply: BIGINT,
    borrowSupply: BIGINT,
    martgageRate: BIGINT,
    lendToken: STRING(100),
    borrowToken: STRING(100),
    state: STRING(30), // 'MATCH, EXECUTION, FINISH, LIQUIDATION, UNDONE'
    spCoin: STRING(100), 
    jpCoin: STRING(100),
    autoLiquidateThreshold: BIGINT,
    created_at: DATE,
    updated_at: DATE,
  });

  return PoolBase;
};