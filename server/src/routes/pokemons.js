const express = require('express');
const router = express.Router();
const pokemonService = require("../services/pokemonService");

const parsePokemonQueryParam = (params) => {
    const searchParams = new URLSearchParams(params);
    const filters = {};
    if (searchParams.has('typeList')) filters.typeList = searchParams.get('typeList').split(',');
    return filters;
}

router.get("/", async (req, res) => {
    try {
        // const page = Number(req.query.page) || 1
        // const pageSize = Number(req.query.pageSize) || 10
        const filters = parsePokemonQueryParam(req.query);
        const pokemons = pokemonService.get(filters)

        res.json({
            pokemons
        });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

router.get("/:id", async (req, res) => {
    const pokemon = pokemonService.getById(req.params.id);
    res.json({
        pokemon
    })
});


module.exports = router;