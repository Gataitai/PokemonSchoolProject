// const Joi = require('joi');
//
// const user = Joi.object({
//     username: Joi.string()
//         .alphanum()
//         .max(30)
//         .required(),
//
//     password: Joi.string()
//         .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
//
//     email: Joi.string()
//         .email(),
//
//     type: Joi.object()
// })

const definition = [
    "username",
    "password",
    "email",
    "type"
]

const data = [];

module.exports = {definition, data};
