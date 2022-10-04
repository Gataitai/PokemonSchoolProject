const userData = require("../data/userData");
const statusCodes = require('http-status-codes');
const bcrypt = require('bcrypt');
const allowedProperties = require("../util/allowedProperties");

const user = (jsonObject) => {
    return allowedProperties(jsonObject, userData.definition)
}

const getAll = () => {
    return userData.data;
}

const getByName = (username) => {
    return userData.data.find(u => u.username === username);
}

const getByType = (type) => {
    return userData.data.filter(p => p.type === type);
}

const save = async (user) => {
    const x = async (u) => await bcrypt.hash(u.password, 10, function (err, hash) {
        u.password = hash;
        console.log(u);
        return u;
    });
    const u = await x(user);
    console.log(u);
    userData.data.push(u);
    return u;
}

const update = (id, user) => {

    return user;
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