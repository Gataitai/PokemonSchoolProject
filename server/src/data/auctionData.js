const crypto = require("crypto");
const pokemonService = require("../services/pokemonService");
const auctionDefinition = [
    "startingPrice",
    "pokemonId",
    "endDate"
];

const data = [];

const x = () => {
    for (let i = 0; i < 2000; i++) {
        const auction  = {
            "id": crypto.randomUUID(),
            "user": "mathijs",
            "startingPrice": Math.floor(Math.random() * 1000),
            "pokemon": pokemonService.getById(Math.floor(Math.random() * (905 - 1 + 1) + 1)),
            "startingDate": new Date(),
            "endDate": "2024-01-08T16:33:30.258Z",
            "bids": []
        }
        data.push(auction);
    }
}
x()

module.exports = {
    auctionDefinition,
    data
}