const userData = require("../data/userData");
const bcrypt = require("bcrypt");
const statusCodes = require("http-status-codes");

const authenticateLogin = (req, res, next) => {
    const user = userData.data.find(u => {return u.username === req.body.username});

    if(bcrypt.compareSync(req.body.password, user.password)){
        next();
    } else {
        return res.status(statusCodes.UNAUTHORIZED).json({error:'Wrong username or password'});
    }
}


module.exports = {
    authenticateLogin
};