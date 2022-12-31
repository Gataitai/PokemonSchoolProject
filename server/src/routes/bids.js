const express = require('express');
const {validateBid, validateAuction} = require("../middleware/validate");
const {authorizeToken} = require("../middleware/authorize");
const bidService = require("../services/bidsService");
const {getUserName} = require("../util/getUser");
const auctionService = require("../services/auctionService");
const router = express.Router();

module.exports = router;

router.get("/:id", (req, res) => {
    const bidsByAuction = bidService.getByAuctionId(req.params.id);
    res.json({
        bidsByAuction
    })
});

router.post("/", validateBid, authorizeToken, (req, res) => {
    const user = getUserName(req.headers.authorization);
    const bid = bidService.save(req.body, user, req.params.auctionId);
    res.json({
        bid
    })
});

router.delete("/:id", validateAuction, authorizeToken, (req, res) => {
    try {
        bidService.remove(req.params.bidId)
        res.status(204)
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});