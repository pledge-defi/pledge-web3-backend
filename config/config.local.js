/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1639718629447_8516';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // BSC env
  config.bscConfig = {
    rpc: 'https://data-seed-prebsc-1-s1.binance.org:8545',
  };

  config.cluster = {
    listen: {
      path: '',
      port: 7002,
      hostname: '0.0.0.0',
    },
  };
  config.security = {
    xframe: {
      enable: false,
    },
    csrf: {
      enable: false,
      ignoreJSON: false,
    },
  };
  config.cors = {
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    credentials: true,
    allowHeaders: [ '*' ], // ['Origin', 'X-Requested-With', 'Content-Type', 'Accept-Version', 'Token'],
    origin: '*',
  };

  config.jwtSecret = 'xxx_pledge_123';

  config.sequelize = {
    datasources: [
      {
        delegate: 'model.testnet',
        baseDir: 'model/testnet',
        username: 'pledge',
        // user: 'pledge',
        password: 'pledge',
        dialect: 'mysql',
        host: '50.18.79.42',
        port: '3306',
        database: 'pledge',
      },
      {
        delegate: 'model.mainnet',
        baseDir: 'model/mainnet',
        username: 'pledgemainnet',
        // user: 'pledge',
        password: 'pledgemainnet',
        dialect: 'mysql',
        host: '50.18.79.42',
        port: '3306',
        database: 'pledgemainnet',
      },
    ],
  };

  return {
    ...config,
    ...userConfig,
  };
};
