const {allowedProperties} = require("../util/allowedProperties");
const pokemonData = require("../data/pokemonData");
const userData = require("../data/userData");
const authData = require("../data/authData");
const statusCodes = require("http-status-codes");
const auctionData = require("../data/auctionData");

const validate = (req, res, next, def) => {
    const validate = allowedProperties(req.body, def);
    if(validate === statusCodes.BAD_REQUEST){
        return res.status(validate).send();
    }
    else{
        next();
    }
}

const validatePokemon = (req, res, next) => {
    const validate = allowedProperties(req.body, pokemonData.definition);
    if(validate === statusCodes.BAD_REQUEST){
        return res.status(validate).send();
    }
    else{
        next();
    }
}

const validateAuction = (req, res, next) => {
    const validate = allowedProperties(req.body, auctionData.auctionDefinition);
    if(validate === statusCodes.BAD_REQUEST){
        return res.status(validate).send();
    }
    else{
        next();
    }
}

const validateUser = (req, res, next) => {
    const validate = allowedProperties(req.body, userData.publicDefinition);
    if(validate === statusCodes.BAD_REQUEST){
        return res.status(validate).send();
    }
    else{
        next();
    }
}

const validateRegister = (req, res, next) => {
        const validate = allowedProperties(req.body, userData.registerDefinition);
        if(validate === statusCodes.BAD_REQUEST){
            return res.status(validate).send();
        }
        else{
            next();
        }
}

const validateLogin = (req, res, next) => {
    const validate = allowedProperties(req.body, authData.loginDefinition);
    if(validate === statusCodes.BAD_REQUEST){
        return res.status(validate).send();
    }
    else{
        next();
    }
}

module.exports = {
    validatePokemon,
    validateAuction,
    validateUser,
    validateRegister,
    validateLogin
};