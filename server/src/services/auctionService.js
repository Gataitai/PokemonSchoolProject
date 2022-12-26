const auctionData = require("../data/auctionData");
const crypto = require("crypto");
const pokemonData = require("../data/pokemonData");

const get = (filters, page, pageSize) => {
    let auctions = auctionData.data;

    if (filters.typeList) {
        if(filters.typeList.length >= 2){
            console.log(filters.typeList)
            console.log(auctions.filter(a => a.pokemon.typeList[0].includes(filters.typeList) && a.pokemon.typeList[1].includes(filters.typeList)))
            return auctions.filter(a => a.pokemon.typeList[0].includes(filters.typeList) && a.pokemon.typeList[1].includes(filters.typeList))
        }
        else{
            return auctions.filter(a => a.pokemon.typeList.some(t => filters.typeList.includes(t)));
        }
    }

    if (filters.endingDate) {
        auctions = auctions.filter((auction) => {
            if (filters.endingDate.startsWith('>=')) {
                return auction.endingDate >= filters.endingDate.slice(2)
            } else if (filters.endingDate.startsWith('<=')) {
                return auction.endingDate <= filters.endingDate.slice(2)
            }
        })
    }

    if (filters.startingPrice) {
        auctions = auctions.filter((auction) => auction.startingPrice >= filters.startingPrice)
    }

    if (filters.name) {
        auctions = auctions.filter((auction) => auction.pokemon.name.toLowerCase().includes(filters.name.toLowerCase()))
    }

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return auctions.slice(startIndex, endIndex);
}

const getById = (id) => {
    return auctionData.data.find(a => a.id === id);
}

// const getAll = () => {
//     return auctionData.data;
// }
//
// const getById = (id) => {
//     return auctionData.data.find(a => a.id === id);
// }
//
// const getByName = (name) => {
//     return auctionData.data.filter(a => a.pokemon.name.toLowerCase().match(name.toLowerCase()));
// }
//
// const getByTypes = (types) => {
//     console.log(types);
//     if(types.length >= 2){
//         return auctionData.data.filter(a => a.pokemon.typeList[0].includes(types) && a.pokemon.typeList[1].includes(types))
//     }
//     else{
//         return auctionData.data.filter(a => a.pokemon.typeList.some(t => types.includes(t)));
//     }
// }
//
// const getByRegion = (region) => {
//     const generation = pokemonData.generations.find(g => g.name === region);
//     return auctionData.data.filter(p => p.pokemon.id >= generation.from && p.pokemon.id <= generation.to);
// }
//
// const getByPrice = (price) => {
//     return auctionData.data.filter(a => a.startingPrice < price);
// }

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
    get,
    getById,
    save,
};
