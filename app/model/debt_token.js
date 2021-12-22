module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const DebtToken = app.model.define('debttoken', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(100),
    addr: STRING(100),
  });

  return DebtToken;
};
