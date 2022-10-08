const userData = require("../data/userData");
const bcrypt = require("bcrypt");
const statusCodes = require("http-status-codes");

const authenticateLogin = (req, res, next) => {
    const user = userData.data.filter(u => {return u.username === req.body.username});

    bcrypt.compareSync(req.body.password, user.password, (err, data) => {
        if (err) throw err
        if (data) {
            next();
        } else {
            return res.status(statusCodes.UNAUTHORIZED).send();
        }
    });
}


module.exports = {
    authenticateLogin
};