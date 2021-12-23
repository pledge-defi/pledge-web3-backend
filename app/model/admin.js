module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Admin = app.model.define('admin', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(100),
    password: STRING(100),
    created_at: DATE,
    updated_at: DATE,
  });

  return Admin;
};
