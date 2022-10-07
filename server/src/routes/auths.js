const express = require('express');
const {validateAuth} = require("../middleware/validate");
// const authData = require("../data/authData");
const authService = require("../services/authService");
const router = express.Router();

router.post("/", validateAuth, async (req, res) => {
    // @todo check the credentials and return an appropriate response
    // For testing purposes a dummy token is returned.

    const token = authService.getToken(req.body);

    res.json({
        token
    })
});

module.exports = router;