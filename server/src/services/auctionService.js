const auctionData = require("../data/auctionData");
const pokemonService = require("../services/pokemonService");
const pokemonData = require("../data/pokemonData");
const crypto = require("crypto");

const get = (filters, page, pageSize) => {
    let auctions = auctionData.data;

    if (filters.typeList) {
        if(filters.typeList.length >= 2){
            auctions = auctions.filter(a => filters.typeList.includes(a.pokemon.typeList[0]) && filters.typeList.includes(a.pokemon.typeList[1]))
        }
        else{
            auctions = auctions.filter(a => a.pokemon.typeList.some(t => filters.typeList.includes(t)));
        }
    }

    if (filters.endingDate) {
        auctions = auctions.filter((auction) => {
            if (filters.endingDate.startsWith('>=')) {
                auctions = auction.endingDate >= filters.endingDate.slice(2)
            } else if (filters.endingDate.startsWith('<=')) {
                auctions = auction.endingDate <= filters.endingDate.slice(2)
            }
        })
    }

    if (filters.region) {
        const region = pokemonData.generations.find(g => g.name === filters.region);
        if(!region){
            throw new Error("Region doesnt exist.")
        }
        auctions = auctions.filter(a => a.pokemon.id >= region.from && a.pokemon.id <= region.to);
    }

    if (filters.startingPrice) {
        auctions = auctions.filter(auction => auction.startingPrice <= filters.startingPrice)
    }

    if (filters.name) {
        auctions = auctions.filter(auction => auction.pokemon.name.toLowerCase().includes(filters.name.toLowerCase()))
    }

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return {
        auctions: auctions.slice(startIndex, endIndex),
        length: auctions.length
    }
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

const remove = (id) => {
    const index = auctionData.data.findIndex(a => a.id === id)
    if(index === -1) {
        throw new Error('Auction not found');
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
