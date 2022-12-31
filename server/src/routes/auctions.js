const express = require('express');
const router = express.Router();
const auctionService = require("../services/auctionService");
const {validateAuction} = require("../middleware/validate");
const {authorizeToken} = require("../middleware/authorize");
const {getUserName} = require("../util/getUser");
const auctionData = require("../data/auctionData");
const bidsRouter = require('./bids');

const parseAuctionQueryParams = (params) => {
    const searchParams = new URLSearchParams(params);
    const filters = {};
    if (searchParams.has('typeList')) filters.typeList = searchParams.get('typeList').split(',');
    if (searchParams.has('name')) filters.name = searchParams.get('name');
    if (searchParams.has('startingPrice')) filters.startingPrice = parseInt(searchParams.get('startingPrice'), 10);
    return filters;
}

router.get("/", async (req, res) => {
    try {
        const page = Number(req.query.page) || 1
        const pageSize = Number(req.query.pageSize) || 10
        const filters = parseAuctionQueryParams(req.query);
        const auctions = auctionService.get(filters, page, pageSize);
        const totalCount = auctionData.data.length;

        res.json({
            auctions, totalCount
        });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

router.get("/:id", async (req, res) => {
    try {
        let auction = auctionService.getById(req.params.id);
        res.json({
            auction
        });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

router.post("/", validateAuction, authorizeToken, (req, res) => {
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

router.patch("/:id", authorizeToken, (req, res) => {
    try {
        const updatedAuction = auctionService.update(req.params.id, req.body);
        res.json({
            updatedAuction
        })
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

router.use("/:auctionId/bids", bidsRouter);

module.exports = router;