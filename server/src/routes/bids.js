const express = require('express');
const {validateBid} = require("../middleware/validate");
const {authorizeToken} = require("../middleware/authorize");
const bidService = require("../services/bidsService");
const {getUserName} = require("../util/getUser");
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
    const bid = bidService.save(req.body, user);
    res.json({
        bid
    })
});