const auctionData = require("../data/auctionData");
const crypto = require("crypto");
const { getById } = require("../services/pokemonService");
const getAll = () => {
    return auctionData.data;
}

const getByName = (name) => {
    return auctionData.data.filter(p => p.name.toLowerCase().match(name.toLowerCase()));
}

const getByTypes = (types) => {
    // type = type.charAt(0).toUpperCase() + type.slice(1);
    // return pokemons.filter(p => p.typeList.includes(type));

    return auctionData.data.filter(pokemon => pokemon.typeList.some(t => types.includes(t)));
}

const save = (auct, user) => {
    const auction = {
        id: crypto.randomUUID(),
        user: user,
        startingPrice: auct.startingPrice,
        pokemon: getById(auct.pokemonId),
        startingDate: new Date(),
        endDate: auct.endDate
    }
    auctionData.data.push(auction);
    return auction;
}

//
// const update = (id, pokemon) => {
//     const index = pokemonData.data.findIndex(p => p.id === id);
//     pokemonData.data[index] = pokemon;
//     return pokemon;
// }
//
// const remove = (id) => {
//     const index = pokemonData.data.findIndex(p => p.id === id);
//     pokemonData.data.splice(index, 1);
//     return statusCodes.NO_CONTENT;
// }

module.exports = {
    getAll,
    save,
    // getById,
    // update,
    // remove,
};
