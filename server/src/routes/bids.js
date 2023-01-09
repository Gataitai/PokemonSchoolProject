const express = require('express');
const {validateBid, validateAuction} = require("../middleware/validate");
const {authorizeToken} = require("../middleware/authorize");
const bidService = require("../services/bidsService");
const auctionService = require("../services/auctionService");
const {getUserName} = require("../util/getUser");
const {auctionWonCheck} = require("../middleware/AuctionWonCheck");
const {auctionHasToExist, bidHasToExist} = require("../middleware/exists");
const router = express.Router();

module.exports = router;

router.post("/:auctionId/bids", validateBid, authorizeToken, auctionHasToExist, auctionWonCheck, async (req, res) => {
    try {
        const user = getUserName(req.headers.authorization);
        const bid = bidService.save(req.body, user, req.params.auctionId);
        res.json({
            bid
        })
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

router.delete("/:auctionId/bids/:bidId", authorizeToken, bidHasToExist, async (req, res) => {
    try {
        const status = bidService.remove(req.params.bidId, req.params.auctionId);
        res.status(status).json({
            message: "deleted"
        })
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});