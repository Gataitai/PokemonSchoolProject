const authData = require("../data/authData");
const userService = require("../services/userService");
const allowedProperties = require("../util/allowedProperties");
const bcrypt = require("bcrypt");
const {filterProperties} = require("../util/allowedProperties");
const jwt = require("jsonwebtoken");

const getToken = (payload) =>{
    const user = userService.getByName(payload.username);
    console.log(user);
    console.log("lmao yes");
    return jwt.sign(payload, user.secret);
}

module.exports = {
    getToken
};