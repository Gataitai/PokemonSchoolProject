const express = require('express');
const router = express.Router();
const pokemonService = require("../services/pokemonService");

router.get("/", async (req, res) => {
    const pokemons = pokemonService.getAll();
    res.json({

        pokemons
    })
});

router.get("/:id", async (req, res) => {
    const pokemons = pokemonService.getAll();
    res.json({
        pokemons
    })
});

router.post("/", async (req, res) => {
    const pokemon = pokemonService.pokemon(req);
    console.log(pokemon);
    res.json({
        pokemon
    })
});

// router.post("/", async (req, res) => {
//     const pokemon = pokemonService.save({
//         id: "25",
//         name: "pikachu",
//         type: "electric"
//     });
//     res.json({
//         pokemon
//     })
// });

module.exports = router;