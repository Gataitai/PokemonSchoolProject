const express = require('express');
const {validateAuth, validateUser} = require("../middleware/validate");
const {userExists} = require("../middleware/exists");
// const authData = require("../data/authData");
const authService = require("../services/authService");
const userService = require("../services/userService");
const {filterProperties} = require("../util/allowedProperties");
const {registerDefinition} = require("../data/authData");
const router = express.Router();
const bcrypt = require("bcrypt");
const statusCodes = require("http-status-codes");
const {authenticateLogin} = require("../middleware/authenticate");

// router.post("/", validateAuth, async (req, res) => {
//     // @todo check the credentials and return an appropriate response
//     // For testing purposes a dummy token is returned.
//
//     const token = authService.getToken(req.body);
//
//     res.json({
//         token
//     })
// });

router.post("/register", validateAuth, userExists, async (req, res) => {
    const user = userService.save(req.body);
    const token = authService.register(user);

    res.json({
        token
    })
});

router.post("/login", validateAuth,  authenticateLogin, async (req, res) => {
    const token = authService.login(req.body);
    res.json({
        token
    })
});

router.post("/logout", validateAuth, async (req, res) => {
    // @todo check the credentials and return an appropriate response
    // For testing purposes a dummy token is returned.

    const token = authService.getToken(req.body);

    res.json({
        token
    })
});

// router.post("/refresh-tokens", validateAuth, async (req, res) => {
//     // @todo check the credentials and return an appropriate response
//     // For testing purposes a dummy token is returned.
//
//     const token = authService.getToken(req.body);
//
//     res.json({
//         token
//     })
// });

// router.post("/forgot-password", validateAuth, async (req, res) => {
//     // @todo check the credentials and return an appropriate response
//     // For testing purposes a dummy token is returned.
//
//     const token = authService.getToken(req.body);
//
//     res.json({
//         token
//     })
// });

// router.post("/reset-password", validateAuth, async (req, res) => {
//     // @todo check the credentials and return an appropriate response
//     // For testing purposes a dummy token is returned.
//
//     const token = authService.getToken(req.body);
//
//     res.json({
//         token
//     })
// });

module.exports = router;