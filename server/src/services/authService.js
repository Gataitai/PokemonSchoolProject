const userService = require("../services/userService");
const jwt = require("jsonwebtoken");
const userData = require("../data/userData");
const crypto = require("crypto");


const login = (login) => {
    const user = userService.getByName(login.username);

    const payload = {
        username: user.username,
        type: user.type
    }

    return jwt.sign(payload, user.secret);
}

const logout = (user) => {
    objIndex = userData.data.findIndex(u => u.username === user.username);
    userData.data[objIndex].secret = crypto.randomBytes(64).toString('hex');
}

module.exports = {
    login,
    logout
};