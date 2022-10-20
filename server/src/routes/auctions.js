const express = require('express');
const router = express.Router();
const auctionService = require("../services/auctionService");

router.get("/", async (req, res) => {
    const auctions = auctionService.getAll();
    res.json({
        auctions
    })
});

module.exports = router;