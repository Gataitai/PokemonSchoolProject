const express = require('express');
const router = express.Router();
const userService = require("../services/userService");
const { validateUser } = require("../middleware/validate");



router.get("/:id", async (req, res) => {
    res.json({

    })
});

router.post("/", validateUser, async (req, res) => {
    const user = await userService.save(req.body);
    res.json({
        user
    })
});

module.exports = router;