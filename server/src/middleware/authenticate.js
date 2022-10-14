const userData = require("../data/userData");
const bcrypt = require("bcrypt");
const statusCodes = require("http-status-codes");
const userService = require("../services/userService");
const jwt = require("jsonwebtoken");

const authenticateLogin = (req, res, next) => {
    console.log(req.body);
    const user = userData.data.find(u => {return u.username === req.body.username});

    if(bcrypt.compareSync(req.body.password, user.password)){
        next();
    } else {
        return res.status(statusCodes.UNAUTHORIZED).send();
    }
}


module.exports = {
    authenticateLogin
};