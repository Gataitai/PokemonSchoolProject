const crypto = require("crypto");
const pokemonService = require("../services/pokemonService");
const auctionDefinition = [
    "startingPrice",
    "pokemonId",
    "endingDate"
];

const data = [];

const x = () => {
    for (let i = 0; i < 500; i++) {
        const auction  = {
            "id": crypto.randomUUID(),
            "user": "mathijs",
            "startingPrice": Math.floor(Math.random() * 1000),
            "pokemon": pokemonService.getById(Math.floor(Math.random() * (905 - 1 + 1) + 1)),
            "startingDate": new Date(),
            "endingDate": "2023-11-26T23:00:00.000Z"
        }
        data.push(auction);
    }
}
x()

module.exports = {
    auctionDefinition,
    data
}