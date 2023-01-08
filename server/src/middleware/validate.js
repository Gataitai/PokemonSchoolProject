const {allowedProperties} = require("../util/allowedProperties");
const pokemonData = require("../data/pokemonData");
const userData = require("../data/userData");
const authData = require("../data/authData");
const statusCodes = require("http-status-codes");
const bidData = require("../data/bidData");
const auctionData = require("../data/auctionData");

const validateAuction = (req, res, next) => {
    const validate = allowedProperties(req.body, auctionData.auctionDefinition);
    if(validate === statusCodes.BAD_REQUEST){
        return res.status(validate).json({error:'Please provide these values: ' + auctionData.auctionDefinition});
    }else if (req.body.startingPrice < 1) {
        return res.status(statusCodes.BAD_REQUEST).json({error:'Price can not be below 0!'});
    }else if(req.body.pokemonId < 1 || req.body.pokemonId > 905){
        return res.status(statusCodes.BAD_REQUEST).json({error:'Pokemon Id must be between 1 and 905!'});
    }else if (isNaN(Date.parse(req.body.endDate))) {
        return res.status(statusCodes.BAD_REQUEST).json({error:'Date is not valid!'});
    }else{
        next();
    }
}

const validateBid = (req, res, next) => {
    const validate = allowedProperties(req.body, bidData.bidDefinition);
    if(validate === statusCodes.BAD_REQUEST){
        return res.status(validate).json({error:'Please provide these values: ' + bidData.bidDefinition});
    }
    else{
        next();
    }
}

const validateUser = (req, res, next) => {
    const validate = allowedProperties(req.body, userData.publicDefinition);
    if(validate === statusCodes.BAD_REQUEST){
        return res.status(validate).json({error:'Please provide these values: ' + userData.publicDefinition});
    }
    else{
        next();
    }
}

const validateRegister = (req, res, next) => {
        const validate = allowedProperties(req.body, userData.registerDefinition);
        if(validate === statusCodes.BAD_REQUEST){
            return res.status(validate).json({error:'Please provide these values: ' + userData.registerDefinition});
        }else if(req.body.password.length < 4){
            return res.status(statusCodes.BAD_REQUEST).json({error:'Password must be over 4 characters!'});
        }
        else{
            next();
        }
}

const validateLogin = (req, res, next) => {
    const validate = allowedProperties(req.body, authData.loginDefinition);
    if(validate === statusCodes.BAD_REQUEST){
        return res.status(validate).json({error:'Please provide these values: ' + authData.loginDefinition});
    }
    else{
        next();
    }
}

module.exports = {
    validateAuction,
    validateUser,
    validateBid,
    validateRegister,
    validateLogin
};