'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.get('/poolinfo', controller.contract.pool_info);
  router.post('/search', controller.contract.search);
	router.post('/hello', controller.home.hello);
};
