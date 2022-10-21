const express = require('express');
const router = express.Router();
const auctionService = require("../services/auctionService");
const {validateAuction} = require("../middleware/validate");
const {authorizeToken} = require("../middleware/authorize");
const {getUserName} = require("../util/getUser");

router.get("/", (req, res) => {
    const auctions = auctionService.getAll();
    res.json({
        auctions
    })
});

router.post("/", validateAuction, authorizeToken, (req, res) => {
    const user = getUserName(req.headers.authorization);
    const auction = auctionService.save(req.body, user);
    res.json({
        auction
    })
});

module.exports = router;