const userData = require("../data/userData");
const bcrypt = require("bcrypt");
const statusCodes = require("http-status-codes");
const userService = require("../services/userService");
const jwt = require("jsonwebtoken");

const authenticateLogin = (req, res, next) => {
    const user = userData.data.find(u => {return u.username === req.body.username});

    if(bcrypt.compareSync(req.body.password, user.password)){
        next();
    } else {
        return res.status(statusCodes.UNAUTHORIZED).send();
    }
}

const authorizeToken = (req, res, next) => {

    const header = jwt.decode(req.body.token);

    const user = userService.getByName(header.username);

    if(jwt.verify(req.body.token, user.secret)){
        next();
    } else {
        return res.status(statusCodes.UNAUTHORIZED).send();
    }

}


module.exports = {
    authenticateLogin,
    authorizeToken
};