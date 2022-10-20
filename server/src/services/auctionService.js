const auctionData = require("../data/auctionData");

const getAll = () => {
    return auctionData.data;
}

// const getById = (id) => {
//     return pokemons[id-1];
// }

const save = (auction) => {
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
    // getById,
    // save,
    // update,
    // remove,
};
