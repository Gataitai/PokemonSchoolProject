const bidData = require("../data/bidData");
const crypto = require("crypto");

const getByAuctionId = (auctionId) => {
    return bidData.data.find(b => b.auctionId === auctionId);
}

// const getById = (id) => {
//     return pokemons[id-1];
// }

const save = (b, user) => {
    const bid = {
        id: crypto.randomUUID(),
        auctionId: b.auctionId,
        user: user,
        biddingPrice: b.biddingPrice,
        bidDate: new Date()

    }
    bidData.data.push(bid);
    return bid;
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
    getByAuctionId,
    save
    // getById,
    // update,
    // remove,
};
