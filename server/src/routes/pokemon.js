const express = require('express');
const router = express.Router();
const pokemons = require('../data/pokemons')

router.get("/", async (req, res) => {
    // @todo check the credentials and return an appropriate response
    // For testing purposes a dummy token is returned.
    res.json({
        pokemons
    })
});

router.post("/", async (req, res) => {

    res.json({
        "name": "pikachu"
    })
});

module.exports = router;