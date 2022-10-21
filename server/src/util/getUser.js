const statusCodes = require("http-status-codes");
const jwt = require("jsonwebtoken");
const userService = require("../services/userService");

const getUser = (header) => {
    const token = header.split(' ')[0];
    const payload = jwt.decode(token);
    return userService.getByName(payload.username);
}

module.exports = {
    getUser
};