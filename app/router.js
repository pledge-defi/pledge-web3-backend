'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  router.get('/poolinfo', controller.contract.pool_info);
  router.post('/search', controller.contract.search);
  router.post('/debt_token_symbol', controller.debt_token.symbol);
};
