const pokemonData = require("../data/pokemonData");
const allowedProperties = require("../util/allowedProperties");

const getAll = () => {
    return pokemonData.data;
}

const getById = (id) => {
    return pokemonData.data.find(p => p.id === id);
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
    pokemonData.data.map(p => p.id !== id ? p : pokemon);
    return pokemon;
}

const remove = (id) => {
    const index = pokemonData.data.findIndex(p => p.id === id);
    pokemons.splice(index, 1);
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