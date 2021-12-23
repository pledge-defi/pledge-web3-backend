const jwt = require('jsonwebtoken');
module.exports = {
    get verifyToken() {
        let token = this.request.header.authCode;
        if( token == null || token.length == 0 ) {
            return null;
        }

        try {
            const user = jwt.verify(token, this.app.config.jwtSecret, (error, decoded) => {
                if (error) {
                    return null;
                }

                return decoded;
            });

            return user;

        } catch (error) {
        }

        return null;
    },
};