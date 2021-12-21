module.exports = app => {
  const { INTEGER, STRING, BIGINT, DATE } = app.Sequelize;

  const PoolData = app.model.define('pooldata', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
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
    app.model.Post.belongsTo(app.model.PoolBase, { as: 'poolbase', foreignKey: 'id' });
  };

  return PoolData;
};
