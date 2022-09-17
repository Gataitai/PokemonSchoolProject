const express = require('express');
const router = express.Router();
const pokemonsService = require('../services/pokemonService')

router.get("/", async (req, res) => {
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