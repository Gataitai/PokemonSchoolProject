const auctionData = require("../data/auctionData");
const crypto = require("crypto");
const { getById } = require("../services/pokemonService");
const getAll = () => {
    return auctionData.data;
}

// const getById = (id) => {
//     return pokemons[id-1];
// }

const save = (auct, user) => {
    const auction = {
        id: crypto.randomUUID(),
        user: user,
        startingPrice: auct.startingPrice,
        pokemon: getById(auct.pokemonId),
        startingDate: new Date()
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
