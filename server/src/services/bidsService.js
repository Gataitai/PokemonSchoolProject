const bidData = require("../data/bidData");
const crypto = require("crypto");
const auctionData = require("../data/auctionData");


const save = (bid, user, auctionId) => {
    const newBid = {
        id: crypto.randomUUID(),
        user: user.username,
        biddingPrice: bid.biddingPrice,
        bidDate: new Date()
    }
    const foundAuction = auctionData.data.find((auction) => auction.id === auctionId);
    if(foundAuction){
        foundAuction.bids.push(bid);
        return newBid;
    }
    else{
        throw new Error('Auction not found');
    }
}

const remove = (bidId, auctionId) => {
    const foundAuction = auctionData.data.find((auction) => auction.id === auctionId);
    if(foundAuction){
        const index = foundAuction.bids.findIndex((bid) => bid.id === bidId);
        if(index === -1) {
            throw new Error('Bid not found');
        }
        foundAuction.bids.splice(index, 1)
    }
    else{
        throw new Error('Auction not found');
    }
}

module.exports = {
    save,
    remove
};
