const pokemonData = require("../data/pokemonData");
const allowedProperties = require("../util/allowedProperties");
const statusCodes = require("http-status-codes");


const getAll = () => {
    return pokemonData.data;
}

const getById = (id) => {
    return pokemonData.data[id-1];
}

const getByName = (name) => {
    // return pokemons.filter(p => p.name.toLowerCase().match(name.toLowerCase()));

    return pokemonData.data.filter(p => p.name.toLowerCase().match(name.toLowerCase()));
}

const getByTypes = (types) => {
    return pokemonData.data.filter(pokemon => pokemon.typeList.some(t => types.includes(t)));
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
    getByTypes,
    save,
    update,
    remove,
};