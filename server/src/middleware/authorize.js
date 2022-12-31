const userData = require("../data/userData");
const bcrypt = require("bcrypt");
const statusCodes = require("http-status-codes");
const userService = require("../services/userService");
const jwt = require("jsonwebtoken");

const authorizeToken = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const payload = jwt.decode(token);

    if(payload !== null){

        const user = userService.getByName(payload.username);
        console.log(user);
        if(jwt.verify(token, user.secret)){
            next();
        } else {
            return res.status(statusCodes.UNAUTHORIZED).json({error:'Wrong username or password'});
        }
    }
    else{
        return res.status(statusCodes.BAD_REQUEST).json({error:'Wrong token'});
    }
}

module.exports = {
    authorizeToken
};