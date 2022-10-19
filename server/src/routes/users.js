const express = require('express');
const router = express.Router();
const userService = require("../services/userService");
const { validateRegister} = require("../middleware/validate");
const { publicDefinition } = require("../data/userData");
const { filterProperties } = require("../util/allowedProperties");
const {userExists, userCantExist} = require("../middleware/exists");
const authService = require("../services/authService");

router.get("/:id", async (req, res) => {
    res.json({

    })
});

router.post("/", validateRegister, userCantExist, async (req, res) => {
    const token = userService.save(req.body);

    res.json({
        token
    })
});


module.exports = router;