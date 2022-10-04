const allowedProperties = require("../util/allowedProperties");
const pokemonData = require("../data/pokemonData");
const userData = require("../data/userData");
const authData = require("../data/authData");
const statusCodes = require("http-status-codes");

const validatePokemon = (req, res, next) => {
    const validate = allowedProperties(req.body, pokemonData.definition);
    if(validate === statusCodes.BAD_REQUEST){
        return res.status(validate).send();
    }
    else{
        next();
    }
}

const validateUser = (req, res, next) => {
    const validate = allowedProperties(req.body, userData.definition);
    if(validate === statusCodes.BAD_REQUEST){
        return res.status(validate).send();
    }
    else{
        next();
    }
}

const validateAuth = (req, res, next) => {
    const validate = allowedProperties(req.body, authData.definition);
    if(validate === statusCodes.BAD_REQUEST){
        return res.status(validate).send();
    }
    else{
        next();
    }
}

module.exports = {
    validatePokemon,
    validateUser,
    validateAuth
};