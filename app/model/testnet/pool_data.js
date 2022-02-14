// eslint-disable-next-line strict
module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize;

  const PoolData = app.model.testnet.define('pooldata', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    pooldatum_id: INTEGER,
    chain_id: STRING(100),
    settleAmountLend: STRING(30),
    settleAmountBorrow: STRING(30),
    finishAmountLend: STRING(30),
    finishAmountBorrow: STRING(30),
    liquidationAmounLend: STRING(30),
    liquidationAmounBorrow: STRING(30),
    created_at: DATE,
    updated_at: DATE,
  });

  PoolData.associate = function() {
    app.model.testnet.PoolData.belongsTo(app.model.testnet.PoolBase, { as: 'poolbase', foreignKey: 'pooldatum_id' });
  };

  return PoolData;
};
