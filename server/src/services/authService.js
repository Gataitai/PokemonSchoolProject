const userData = require("../data/userData");
const bcrypt = require("bcrypt")

const user = (req) => {
    return req.body.filter(key => userData.user.includes(key));
}

const getToken = (username, password) =>{
    bcrypt.co
}

module.exports = {
    user,
};