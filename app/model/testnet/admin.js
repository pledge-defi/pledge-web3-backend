// eslint-disable-next-line strict
module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Admin = app.model.testnet.define('admin', {
    user_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(100),
    password: STRING(100),
    created_at: DATE,
    updated_at: DATE,
  },
  {
    freezeTableName: true, // 不自动将表名添加复数
  }
  );

  return Admin;
};
