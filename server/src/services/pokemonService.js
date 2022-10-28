const pokemonData = require("../data/pokemonData");
const pokemons = require("json-pokemon");
const allowedProperties = require("../util/allowedProperties");
const statusCodes = require("http-status-codes");
const {setCharset} = require("express/lib/utils");


const getAll = () => {
    return pokemons;
}

const getById = (id) => {
    return pokemons[id-1];
}

const getByName = (name) => {
    return pokemons.find(p => p.name.toLowerCase() === name.toLowerCase());
}

const getByTypes = (types) => {
    // type = type.charAt(0).toUpperCase() + type.slice(1);
    // return pokemons.filter(p => p.typeList.includes(type));

    return pokemons.filter(pokemon => pokemon.typeList.some(t => types.includes(t)));
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