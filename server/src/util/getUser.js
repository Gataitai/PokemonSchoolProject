const jwt = require("jsonwebtoken");

const getUserName = (header) => {
    const token = header.split(' ')[1];
    const payload = jwt.decode(token);
    return payload.username;
}

module.exports = {
    getUserName
};