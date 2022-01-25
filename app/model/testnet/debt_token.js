module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const DebtToken = app.model.define('token_name', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(100),
    addr: STRING(100),
    created_at: DATE,
    updated_at: DATE,
  });

  return DebtToken;
};
