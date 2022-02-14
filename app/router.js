'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  // require('dotenv').config();

  const { controller } = app;
  const API = app.router.namespace('/api/v2');

  const mAuth = app.middleware.auth();

  // user
  API.post('/user/login', controller.home.login);
  API.post('/user/logout', mAuth, controller.home.logout);

  // pool
  API.post('/pool/search', mAuth, controller.contract.search);
  API.post('/pool/debtTokenList', mAuth, controller.debttoken.debtTokenList);
  API.post('/pool/poolList', mAuth, controller.contract.poolList);

  // multi-sign
  API.post('/pool/setMultiSign', mAuth, controller.contract.setMultiSign);
  API.post('/pool/getMultiSign', mAuth, controller.contract.getMultiSign);

};
