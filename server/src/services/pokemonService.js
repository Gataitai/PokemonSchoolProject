const pokemonData = require("../data/pokemonData");

const pokemon = (req) => {
    return req.body.filter(key => pokemonData.pokemon.includes(key));
}

const getAll = () => {
    return pokemonData.data;
}

const getById = (id) => {
    return pokemonData.data.find(p => p.id === id);
}

const getByName = (name) => {
    return pokemons.find(p => p.name === name);
}

const getByType = (type) => {
    return pokemons.filter(p => p.type === type);
}

const save = (pokemon) => {
    pokemons.push(pokemon);
    return pokemon;
}

const update = (id, pokemon) => {
    pokemons.map(p => p.id !== id ? p : pokemon);
    return pokemon;
}

const remove = (id) => {
    const index = pokemons.findIndex(p => p.id === id);
    pokemons.splice(index, 1);
}

module.exports = {
    pokemon,
    getAll,
    getById,
    getByName,
    getByType,
    save,
    update,
    remove,
};