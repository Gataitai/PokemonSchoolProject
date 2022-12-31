const auctionData = require("../data/auctionData");
const pokemonService = require("../services/pokemonService");
const crypto = require("crypto");

const get = (filters, page, pageSize) => {
    let auctions = auctionData.data;

    if (filters.typeList) {
        if(filters.typeList.length >= 2){
            return auctions.filter(a => filters.typeList.includes(a.pokemon.typeList[0]) && filters.typeList.includes(a.pokemon.typeList[1]))
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
        auctions = auctions.filter(auction => auction.startingPrice <= filters.startingPrice)
    }

    if (filters.name) {
        auctions = auctions.filter(auction => auction.pokemon.name.toLowerCase().includes(filters.name.toLowerCase()))
    }

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return auctions.slice(startIndex, endIndex);
}

const getById = (id) => {
    return auctionData.data.find(a => a.id === id);
}

const save = (auction, user) => {
    const newAuction = {
        id: crypto.randomUUID(),
        user: user,
        startingPrice: auction.startingPrice,
        pokemon: pokemonService.getById(auction.pokemonId),
        startingDate: new Date(),
        endDate: auction.endDate,
        bids: []
    }

    auctionData.data.push(newAuction);
    return newAuction;
}

const update = (auctionId, updatedAuction) => {
    const index = auctionData.data.findIndex((auction) => auction.id === auctionId);
    if(updatedAuction.endDate){
        auctionData.data[index].endDate = updatedAuction.endDate;
    }
    if(updatedAuction.startingPrice){
        auctionData.data[index].startingPrice = updatedAuction.startingPrice;
    }
    return auctionData.data[index];
}

// const remove = (bidId, auctionId) => {
//     const foundAuction = auctionData.data.find((auction) => auction.id === auctionId);
//     if(foundAuction){
//         const index = foundAuction.bids.findIndex((bid) => bid.id === bidId);
//         if(index === -1) {
//             throw new Error('Bid not found');
//         }
//         foundAuction.bids.splice(index, 1)
//     }
//     else{
//         throw new Error('Auction not found');
//     }
// }

const remove = (id) => {
    const index = auctionData.data.findIndex((auction) => auction.id === id)
    if(index === -1) {
        throw new Error('Bid not found');
    }
    auctionData.data.splice(index, 1)
}

module.exports = {
    get,
    getById,
    save,
    update,
    remove
};
