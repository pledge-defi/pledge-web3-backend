module.exports = (option, app) => {
  const body = {
    code: 400,
    message: "Invalid Token",
  };

  return async function (ctx, next) {
    const token = ctx.request.header.authCode;    
    if (token) {
      try {
        const decodedToken = ctx.jwt.verify(token, app.config.jwtSecret);
        if(!decodedToken) {
          return ctx.body = body;
        }
      } catch (error) {
          return ctx.body = body;
      }

      await next(option);
    } else {
          return ctx.body = body;
    }
  }
};
