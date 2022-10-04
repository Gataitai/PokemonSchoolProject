const pokemonData = require("../data/pokemonData");
const allowedProperties = require("../util/allowedProperties");
const statusCodes = require("http-status-codes");


const getAll = () => {
    return pokemonData.data;
}

const getById = (id) => {
    const index = pokemonData.data.findIndex(p => p.id === id);
    if(index === -1){
        return statusCodes.NOT_FOUND;
    }
    else{
        return pokemonData.data.find(p => p.id === id);
    }
}

const getByName = (name) => {
    return pokemonData.data.find(p => p.name === name);
}

const getByType = (type) => {
    return pokemonData.data.filter(p => p.type === type);
}

const save = (pokemon) => {
    pokemonData.data.push(pokemon);
    return pokemon;
}

const update = (id, pokemon) => {
    const index = pokemonData.data.findIndex(p => p.id === id);
    pokemonData.data[index] = pokemon;
    return pokemon;
}

const remove = (id) => {
    const index = pokemonData.data.findIndex(p => p.id === id);
    pokemonData.data.splice(index, 1);
    return statusCodes.NO_CONTENT;
}

module.exports = {
    getAll,
    getById,
    getByName,
    getByType,
    save,
    update,
    remove,
};