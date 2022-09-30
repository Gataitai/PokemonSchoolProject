const express = require('express');
const router = express.Router();
const userService = require("../services/userService")
const userData = require("../data/userData");



router.get("/:id", async (req, res) => {
    res.json({

    })
});

router.post("/", async (req, res) => {
    const user = userService.user(req);
    userService.save(user);
    res.json({

    })
});

module.exports = router;