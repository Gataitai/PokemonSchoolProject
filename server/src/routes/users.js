const express = require('express');
const router = express.Router();
const userService = require("../services/userService");
const { validateRegister} = require("../middleware/validate");
const { userCantExist, userHasToExist} = require("../middleware/exists");

router.get("/:username", userHasToExist, async (req, res) => {
    try {
        let user = userService.getByName(req.params.username);
        res.json({
            username: user.username,
            type: user.type,
            wonAuctions: user.wonAuctions
        });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});


router.post("/", validateRegister, userCantExist, async (req, res) => {
    const token = userService.save(req.body);

    res.json({
        token
    })
});


module.exports = router;