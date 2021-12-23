const jwt = require('jsonwebtoken');

module.exports = (option, app) => {
  const body = {
    code: 401,
    message: "Invalid Token",
  };

  return async function (ctx, next) {
    const token = ctx.request.header.authcode;    
	  //console.log("token: ", token, ctx.app.config.jwtSecret);
    if (token) {
      try {
        const decodedToken = jwt.verify(token, ctx.app.config.jwtSecret);
	      //console.log('verided: ', decodedToken);
        if(!decodedToken) {
	  ctx.status = 401;
          return ctx.body = body;
        }
      } catch (error) {
	  ctx.status = 401;
          return ctx.body = body;
      }

      await next(option);
    } else {
	  ctx.status = 401;
          return ctx.body = body;
    }
  }
};
