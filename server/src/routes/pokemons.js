const express = require('express');
const router = express.Router();
const pokemonService = require("../services/pokemonService");

router.get("/", async (req, res) => {
    const types = req.query.types;
    const name = req.query.name;
    const region = req.query.region;

    let pokemons;

    if(types){
        pokemons = pokemonService.getByTypes(types.split(','));
    }
    else if(name){
        pokemons = pokemonService.getByName(name);
    }
    else if(region){
        pokemons = pokemonService.getByRegion(region)
    }
    else{
        pokemons = pokemonService.getAll();
    }
    res.json({
        pokemons
    })
});

router.get("/:id", async (req, res) => {
    const pokemon = pokemonService.getById(req.params.id);
    res.json({
        pokemon
    })
});

// router.post("/", validatePokemon, async(req, res) => {
//     const pokemon = pokemonService.save(req.body);
//     res.json({
//         pokemon
//     })
// });
//
// router.put("/:id", validatePokemon, async(req, res) => {
//     const pokemon = pokemonService.update(req.params.id, req.body);
//     res.json({
//         pokemon
//     })
// });
//
// router.delete("/:id",async (req, res) => {
//     const pokemon = pokemonService.remove(req.params.id);
//     res.json({
//         pokemon
//     })
// });



module.exports = router;