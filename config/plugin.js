'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by eg
  static: {
    enable: true,
  },
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  }
};
