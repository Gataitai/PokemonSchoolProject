const express = require('express');
const router = express.Router();
const auctionService = require("../services/auctionService");
const {validateAuction} = require("../middleware/validate");
const {authorizeToken} = require("../middleware/authorize");
const {getUserName} = require("../util/getUser");

router.get("/", (req, res) => {
    const types = req.query.types;
    const name = req.query.name;
    const price = req.query.price;

    let auctions;

    if(types){
        auctions = auctionService.getByTypes(types.split(','));
    }
    else if(name){
        auctions = auctionService.getByName(name);
    }
    else if(price){
        auctions = auctionService.getByPrice(price)
    }
    else{
        auctions = auctionService.getAll();
    }

    res.json({
        auctions
    })
});

router.get("/:id", (req, res) => {
    let auction = auctionService.getById(req.params.id);
    res.json({
        auction
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