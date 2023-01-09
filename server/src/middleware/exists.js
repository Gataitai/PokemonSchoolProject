const userData = require("../data/userData");
const statusCodes = require("http-status-codes");
const auctionData = require("../data/auctionData");
const pokemonData = require("../data/userData");
const auctionService = require("../services/auctionService");

const userHasToExist = (req, res, next) => {
    if(userData.data.some(u => u.username === req.body.username || u.username === req.params.username)){
        next();
    }
    else{
        return res.status(statusCodes.NOT_FOUND).json({error: "Username doesn't exist"});
    }
}

const pokemonHasToExist = (req, res, next) => {
    if(pokemonData.data.some(p => p.id === req.params.id)){
        next();
    }
    else{
        return res.status(statusCodes.NOT_FOUND).json({error: "Pokemon by id doesn't exist"});
    }
}

const auctionHasToExist = (req, res, next) => {
    if(auctionData.data.some(a => a.id === req.params.id || a.id === req.params.auctionId)){
        next();
    }
    else{
        return res.status(statusCodes.NOT_FOUND).json({error: "Auction with id doesn't exist or has been deleted"});
    }
}

const bidHasToExist = (req, res, next) => {
    const auction = auctionService.getById(req.params.auctionId);
    if(auction.bids.some(b => b.id === req.params.bidId)){
        next();
    }else {
        return res.status(statusCodes.NOT_FOUND).json({error: "Bid with id doesn't exist"});
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
    bidHasToExist,
    pokemonHasToExist,
    userHasToExist,
    auctionHasToExist,
    userCantExist
};