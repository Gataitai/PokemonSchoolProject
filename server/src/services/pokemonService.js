const pokemons = require('../data/pokemonData');

const getAll = () => {
    return pokemons;
}

const getById = (id) => {
    return pokemons.filter(p => p.id === id);
}

const getByName = (name) => {
    return pokemons.filter(p => p.name === name);
}

const getByType = (type) => {
    return pokemons.filter(p => p.type === type);
}

const save = (pokemon) => {
    pokemons.push(pokemon);
}

const update = (id, pokemon) => {
    pokemons.map(p => p.id !== id ? p : pokemon);
}

const remove = (id) => {
    const index = pokemons.findIndex(p => p.id === id);
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