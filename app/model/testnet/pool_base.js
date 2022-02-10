// eslint-disable-next-line strict
module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const PoolBase = app.model.testnet.define('poolbase', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    pool_id: INTEGER,
    settleTime: STRING(100),
    endTime: STRING(100),
    interestRate: STRING(100),
    maxSupply: STRING(100),
    lendSupply: STRING(100),
    borrowSupply: STRING(100),
    martgageRate: STRING(100),
    lendToken: STRING(100),
    borrowToken: STRING(100),
    state: STRING(30), // 'MATCH, EXECUTION, FINISH, LIQUIDATION, UNDONE'
    spCoin: STRING(100),
    jpCoin: STRING(100),
    autoLiquidateThreshold: STRING(100),
    created_at: DATE,
    updated_at: DATE,
  });

  PoolBase.associate = function() {
    app.model.testnet.PoolBase.hasOne(app.model.testnet.PoolData, { as: 'pooldata' });
  };

  return PoolBase;
};
