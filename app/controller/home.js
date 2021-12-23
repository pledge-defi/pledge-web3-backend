'use strict';

const Controller = require('egg').Controller;

const HOME_SUCCESS = 200;
const HOME_FAILED  = 400;

const MESSAGE_LOGIN_SUCCESS = "登录成功";
const MESSAGE_LOGIN_FAILED = "登录失败";
const MESSAGE_LOGOUT_SUCCESS = "退出成功";
const MESSAGE_LOGOUT_FAILED = "退出失败";

class HomeController extends Controller {
  async login() {
    const { ctx } = this;

    const { name, password } = ctx.request.body;
    if (!name || !password) {
      const body = {
        code: HOME_FAILED,
        message: MESSAGE_LOGIN_FAILED,
      };

      ctx.body = body;
      return;
    }

    const result = await ctx.service.home.login(name, password);
    if (!result) {
      const body = {
        code: HOME_FAILED,
        message: MESSAGE_LOGIN_FAILED,
      };

      ctx.body = body;
      return;
    }

    const body = {
      code: HOME_SUCCESS,
      message: MESSAGE_LOGIN_SUCCESS,
      data: result,
    }
    ctx.body = body;
  }

  async logout(){
    const { ctx } = this;
    const body = {
      code: HOME_SUCCESS,
      message: MESSAGE_LOGOUT_SUCCESS,
    }
    ctx.body = body;
  }
}

module.exports = HomeController;
