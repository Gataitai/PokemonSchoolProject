const authData = require("../data/authData");
const userService = require("../services/userService");
const allowedProperties = require("../util/allowedProperties");
const bcrypt = require("bcrypt");
const {filterProperties} = require("../util/allowedProperties");
const jwt = require("jsonwebtoken");
//
// const getToken = (payload) =>{
//     console.log(payload);
//     const user = userService.getByName(payload.username);
//     return jwt.sign(payload, user.secret);
// }

const register = (user) => {
    const payload = {
        username: user.username
    }
    return jwt.sign(payload, user.secret);
}

const login = (login) => {
    const user = userService.getByName(login.username);
    return jwt.sign(user.username, user.secret);
}

module.exports = {
    register,
    login
};