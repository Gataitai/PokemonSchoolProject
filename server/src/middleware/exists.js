const userData = require("../data/userData");
const statusCodes = require("http-status-codes");

const userHasToExist = (req, res, next) => {
    if(userData.data.some(u => u.username === req.body.username)){
        next();
    }
    else{
        return res.status(statusCodes.CONFLICT).json({error: "User doesnt exist"});
    }
}

const userCantExist = (req, res, next) => {
    if(userData.data.some(u => u.username === req.body.username)){
        return res.status(statusCodes.CONFLICT).json({error: "User already exists"});
    }
    else{
        next();
    }
}

module.exports = {
    userHasToExist,
    userCantExist
};