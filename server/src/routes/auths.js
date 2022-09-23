const express = require('express');
const pokemonData = require("../data/pokemonData");
const router = express.Router();

router.post("/", async (req, res) => {
    // @todo check the credentials and return an appropriate response
    // For testing purposes a dummy token is returned.

    const user = req.body.filter(key => pokemonData.pokemon.includes(key));


    res.json({
        "token": "dummyt0k3nv4lu3!"
    })
});

module.exports = router;