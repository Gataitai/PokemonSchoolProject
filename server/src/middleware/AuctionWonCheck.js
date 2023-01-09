const userService = require("../services/userService");
const auctionService = require("../services/auctionService");
const statusCodes = require("http-status-codes");

const auctionWonCheck = (req, res, next) => {
    let result = 0;
    let id;
    if(req.params.id){
        id = req.params.id;
        result = check(req.params.id);
    }
    else if(req.params.auctionId){
        id = req.params.auctionId;
        result = check(req.params.auctionId);
    }

    if(result === 1){
        makeWinner(id);
        return res.status(statusCodes.CONFLICT).json({error: "Auction has ended."});
    }else{
        next();
    }
}

const check = (id) => {
    const auction = auctionService.getById(id);

    if(new Date(auction.endDate).getTime() < Date.now()){
        return 1;
    }
    else{
        console.log(new Date(Date.now()))
        return 0;
    }
}

const makeWinner = (id) => {
    const auction = auctionService.getById(id);
    if(auction.bids.length !== 0){
        const highestBid = auction.bids.sort((a, b) => b.biddingPrice - a.biddingPrice).find(bid => bid);
        const user = userService.getByName(highestBid.user);
        user.wonAuctions.push({
            pokemon: auction.pokemon,
            price: highestBid.biddingPrice
        });
    }
    auctionService.remove(auction.id);
}
module.exports = {
    auctionWonCheck
};