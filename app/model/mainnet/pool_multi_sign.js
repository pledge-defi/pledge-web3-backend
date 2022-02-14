// eslint-disable-next-line strict
module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const PoolMultiSign = app.model.mainnet.define(
    'multi_sign',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      chain_id: INTEGER,
      sp_name: STRING(100),
      _spToken: STRING(100),
      jp_name: STRING(100),
      _jpToken: STRING(100),
      sp_address: STRING(100),
      jp_address: STRING(100),
      spHash: STRING(100),
      jpHash: STRING(100),
      multi_sign_account: Array,
      created_at: DATE,
      updated_at: DATE,
    },
    { freezeTableName: true },
    // {
    //   // 排除密码，不返回密码
    //   exclude: [ 'created_at', 'updated_at', 'id', 'createdAt', 'updatedAt' ],
    // },
    {
      timestamps: false,
      // 默认作用域
      defaultScope: {
        attributes: {
          // 排除密码，不返回密码
          exclude: [ 'created_at' ],
        },
      },
    });

  return PoolMultiSign;
};

