const express = require('express');
const router = express.Router();
const userService = require("../services/userService");
const { validateUser } = require("../middleware/validate");
const { publicDefinition } = require("../data/userData");
const { filterProperties } = require("../util/allowedProperties");

router.get("/:id", async (req, res) => {
    res.json({

    })
});

router.post("/", validateUser, async (req, res) => {
    const user = await userService.save(req.body);
    const filteredUser = filterProperties(user, publicDefinition);
    res.json({
        filteredUser
    })
});

module.exports = router;