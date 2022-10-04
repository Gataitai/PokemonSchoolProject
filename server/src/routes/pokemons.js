const express = require('express');
const router = express.Router();
const pokemonService = require("../services/pokemonService");
const { validatePokemon } = require("../middleware/validate");
const { definition } = require("../data/pokemonData");

router.get("/", async (req, res) => {
    const pokemons = pokemonService.getAll();
    res.json({
        pokemons
    })
});

router.get("/:id", async (req, res) => {
    const pokemons = pokemonService.getById(req.params.id);
    res.json({
        pokemons
    })
});

router.post("/", validatePokemon, async(req, res) => {
    const pokemon = pokemonService.save(req.body);
    res.json({
        pokemon
    })
});

router.put("/:id", validatePokemon, async(req, res) => {
    const pokemon = pokemonService.update(req.params.id, req.body);
    res.json({
        pokemon
    })
});

router.delete("/:id",async (req, res) => {
    const pokemon = pokemonService.remove(req.params.id);
    res.json({
        pokemon
    })
});



module.exports = router;