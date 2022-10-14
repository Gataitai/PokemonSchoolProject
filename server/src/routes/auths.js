const express = require('express');
const {validateAuth, validateUser, validateAuthLogin, validateAuthRegister, validateLogin} = require("../middleware/validate");
const {userExists} = require("../middleware/exists");
const authService = require("../services/authService");
const userService = require("../services/userService");
const {filterProperties} = require("../util/allowedProperties");
const {registerDefinition} = require("../data/authData");
const {loginDefinition} = require("../data/authData");
const router = express.Router();
const bcrypt = require("bcrypt");
const statusCodes = require("http-status-codes");
const {authenticateLogin} = require("../middleware/authenticate");

router.post("/", validateLogin,  authenticateLogin, async (req, res) => {
    const token = authService.login(req.body);
    res.json({
        token
    })
});

router.put("/", validateLogin,  authenticateLogin, async (req, res) => {
    authService.logout(req.body);
    return res.status(statusCodes.NO_CONTENT).send();
});


// router.post("/logout", async (req, res) => {
//     // @todo check the credentials and return an appropriate response
//     // For testing purposes a dummy token is returned.
//
//     const token = authService.getToken(req.body);
//
//     res.json({
//         token
//     })
// });

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