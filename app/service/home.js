const Service = require('egg').Service;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class HomeService extends Service {
  async login(name, password) {
    // 查询name
    const Op = this.app.Sequelize.Op;
    const admin = await this.ctx.model.mainnet.Admin.findOne({
      attributes: ["user_id", "name", "password"],
      where: {
        name: name,
      },
    });

    // 没有查到该用户
    if (!admin) {
      return null;
    }

    // 校验密码
    const currentPassword = admin.password; 
    const equal = bcrypt.compareSync(password, currentPassword);
    if (!equal) { //密码不一致
        return null;
    }

    const token = jwt.sign( { userId: admin.user_id }, this.app.config.jwtSecret, {expiresIn: '7d'});
    if (token) {
        return {
          "token_id": token,
        };
    } 
    
    return null;
  }
}

module.exports = HomeService;
