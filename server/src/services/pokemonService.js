const pokemonData = require("../data/pokemonData");
const allowedProperties = require("../util/allowedProperties");

const get = (filters) => {
    let pokemons = pokemonData.data;

    if (filters.typeList) {
        if(filters.typeList.length >= 2){
            return pokemons.filter(p => filters.typeList.includes(p.typeList[0]) && filters.typeList.includes(p.typeList[1]))
        }
        else{
            return pokemons.filter(p => p.typeList.some(t => filters.typeList.includes(t)));
        }
    }
    return pokemons
}

const getById = (id) => {
    return pokemonData.data[id-1];
}

const getByName = (name) => {
    return pokemonData.data.filter(p => p.name.toLowerCase().match(name.toLowerCase()));
}

module.exports = {
    get,
    getById,
    getByName
};