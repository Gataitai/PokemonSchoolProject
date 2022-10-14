const userData = require("../data/userData");
const statusCodes = require("http-status-codes");

const userExists = (req, res, next) => {
    if(userData.data.some(u => u.username === req.body.username)){
        console.log("exists");
        return res.status(statusCodes.CONFLICT).send();
    }
    else{
        next();
    }
}


module.exports = {
    userExists
};