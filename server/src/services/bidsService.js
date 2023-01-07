const bidData = require("../data/bidData");
const crypto = require("crypto");
const auctionData = require("../data/auctionData");
const statusCodes = require("http-status-codes");
const userData = require("../data/userData");


const save = (bid, user, auctionId) => {
    const newBid = {
        id: crypto.randomUUID(),
        user: user,
        biddingPrice: bid.biddingPrice,
        bidDate: new Date()
    }
    const foundAuction = auctionData.data.find(a => a.id === auctionId);
    if(foundAuction){
        foundAuction.bids.push(newBid);
        return newBid;
    }
    else{
        throw new Error('Auction not found');
    }
}

const remove = (bidId, auctionId) => {
    const foundAuction = auctionData.data.find(a => a.id === auctionId);
    if(foundAuction){
        const index = foundAuction.bids.findIndex((bid) => bid.id === bidId);
        if(index === -1) {
            throw new Error('Bid not found');
        }
        foundAuction.bids.splice(index, 1)
        return statusCodes.NO_CONTENT;
    }
    else{
        throw new Error('Auction not found');
    }
}

module.exports = {
    save,
    remove
};
