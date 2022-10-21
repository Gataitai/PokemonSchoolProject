const express = require('express');
const router = express.Router();
const auctionService = require("../services/auctionService");
const {validateAuction} = require("../middleware/validate");
const {authorizeToken} = require("../middleware/authorize");

router.get("/", (req, res) => {
    const auctions = auctionService.getAll();
    res.json({
        auctions
    })
});

router.post("/",validateAuction, authorizeToken, (req, res) => {
    const auctions = auctionService.getAll();
    res.json({
        auctions
    })
});

module.exports = router;