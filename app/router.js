'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const API = app.router.namespace('/api/v2');
  
  // test
  API.get('/poolinfo', controller.contract.pool_info);

  // post
  API.post('/search', controller.contract.search);
  API.post('/debt_token_symbol', controller.debttoken.symbol);
};
