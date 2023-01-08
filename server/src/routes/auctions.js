const express = require('express');
const router = express.Router();
const auctionService = require("../services/auctionService");
const {validateAuction} = require("../middleware/validate");
const {authorizeToken} = require("../middleware/authorize");
const {getUserName} = require("../util/getUser");
const bidsRouter = require('./bids');
const {auctionWonCheck} = require("../middleware/AuctionWonCheck");
const {auctionHasToExist} = require("../middleware/exists");
const {isAdmin} = require("../middleware/isAdmin");

const parseAuctionQueryParams = (params) => {
    const searchParams = new URLSearchParams(params);
    const filters = {};
    if (searchParams.has('typeList')) filters.typeList = searchParams.get('typeList').split(',');
    if (searchParams.has('name')) filters.name = searchParams.get('name');
    if (searchParams.has('region')) filters.region = searchParams.get('region');
    if (searchParams.has('price')) filters.startingPrice = parseInt(searchParams.get('price'), 10);
    return filters;
}

router.get("/", async (req, res) => {
    try {
        const page = Number(req.query.page) || 1
        const pageSize = Number(req.query.pageSize) || 32
        const filters = parseAuctionQueryParams(req.query);
        const items = auctionService.get(filters, page, pageSize);
        const auctions = items.auctions
        const totalCount = items.length;

        res.json({
            auctions, totalCount, pageSize, page
        });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

router.get("/:id", auctionHasToExist, auctionWonCheck, async (req, res) => {
    try {
        let auction = auctionService.getById(req.params.id);
        res.json({
            auction
        });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

router.post("/", authorizeToken, isAdmin, validateAuction,  async (req, res) => {
    try {
        const user = getUserName(req.headers.authorization);
        const auction = auctionService.save(req.body, user);
        res.json({
            auction
        });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

router.patch("/:id", authorizeToken, isAdmin, validateAuction, async (req, res) => {
    try {
        const updatedAuction = auctionService.update(req.params.id, req.body);
        res.json({
            updatedAuction
        })
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

router.delete("/:id", authorizeToken, isAdmin, async (req, res) => {
    try {
        auctionService.remove(req.params.id);
        res.status(204).json({message: "deleted"});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

router.use(bidsRouter);

module.exports = router;