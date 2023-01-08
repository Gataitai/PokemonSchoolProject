const userData = require("../data/userData");
const statusCodes = require("http-status-codes");
const auctionData = require("../data/auctionData");

const userHasToExist = (req, res, next) => {
    if(userData.data.some(u => u.username === req.body.username || u.username === req.params.username)){
        next();
    }
    else{
        return res.status(statusCodes.CONFLICT).json({error: "Username doesn't exist"});
    }
}

const auctionHasToExist = (req, res, next) => {
    if(auctionData.data.some(a => a.id === req.params.id || a.id === req.params.auctionId)){
        next();
    }
    else{
        return res.status(statusCodes.CONFLICT).json({error: "Auction with id doesn't exist"});
    }
}

const userCantExist = (req, res, next) => {
    if(userData.data.some(u => u.username === req.body.username)){
        return res.status(statusCodes.CONFLICT).json({error: "Username already exists"});
    }
    else{
        next();
    }
}

module.exports = {
    userHasToExist,
    auctionHasToExist,
    userCantExist
};