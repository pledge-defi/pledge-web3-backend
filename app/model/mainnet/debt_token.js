// eslint-disable-next-line strict
module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  return app.model.mainnet.define('token_name', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(100),
    addr: STRING(100),
    created_at: DATE,
    updated_at: DATE,
  });
};
