const userData = require("../data/userData");

const user = (req) => {
    return req.body.filter(key => userData.user.includes(key));
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

const save = (user) => {
    userData.data.push(user);
    return user;
}

const update = (id, user) => {

    return user;
}

const remove = (id) => {
    const index = userData.data.findIndex(u => u.id === id);
    pokemons.splice(index, 1);
}

module.exports = {
    user,
    getAll,
    getByName,
    getByType,
    save,
    update,
    remove,
};