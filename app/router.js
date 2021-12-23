'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const API = app.router.namespace('/api/v2');

  // user
  API.post('/user/login', controller.contract.search);
  API.post('/user/logout', controller.contract.search);
  
  // pool 
  API.post('/pool/search', controller.contract.search);
  API.post('/pool/debtTokenList', controller.debttoken.debtTokenList);
  API.post('/pool/poolList', controller.contract.poolList);
};
