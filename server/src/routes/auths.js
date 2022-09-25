const express = require('express');
const authData = require("../data/authData");
const router = express.Router();

router.post("/", async (req, res) => {
    // @todo check the credentials and return an appropriate response
    // For testing purposes a dummy token is returned.

    const auth = req.body.filter(key => authData.includes(key));


    res.json({
        "token": "dummyt0k3nv4lu3!"
    })
});

module.exports = router;