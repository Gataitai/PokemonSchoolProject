const userData = require("../data/userData");
const statusCodes = require('http-status-codes');
const {filterProperties} = require("../util/allowedProperties");
const bcrypt = require('bcrypt');
const uuid = require("uuid");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const auctionData = require("../data/auctionData");

const getAll = () => {
    // const users = [];
    // for(let user in userData.data){
    //     users.push(filterProperties(user, userData.publicDefinition));
    // }
    // return users;

    return userData.data;
}

const getByName = (username) => {
    return userData.data.find(u => u.username === username);
}

const getByType = (type) => {
    return userData.data.filter(p => p.type === type);
}

const save = (user) => {
    user.password = bcrypt.hashSync(user.password, 10);
    user.secret = crypto.randomBytes(64).toString('hex');
    userData.data.push(user);

    const payload = {
        username: user.username,
        type: userData.userTypes[0]
    }

    return jwt.sign(payload, user.secret);
}

const update = (updatedUser) => {
    const index = userData.data.findIndex((user) => user.id === updatedUser.id);
    if(updatedAuction.endDate){
        auctionData.data[index].endDate = updatedAuction.endDate;
    }
    if(updatedAuction.startingPrice){
        auctionData.data[index].endDate = updatedAuction.startingPrice;
    }
    return auctionData.data[index];
}

const remove = (id) => {
    const index = userData.data.findIndex(u => u.id === id);
    pokemons.splice(index, 1);
}

module.exports = {
    getAll,
    getByName,
    getByType,
    save,
    update,
    remove,
};