const express = require('express');
const router = express.Router();
const pokemonService = require("../services/pokemonService");

router.get("/", async (req, res) => {
    const pokemons = pokemonService.getAll();
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