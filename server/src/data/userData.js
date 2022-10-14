const publicDefinition = [
    "username",
    "email",
    "type"
]

const registerDefinition = [
    "username",
    "password",
    "email"
]

const privateDefinition = [
    "username",
    "password",
    "email",
    "type",
    "secret"
]

const userTypes = [
    "user",
    "admin"
]

const data = [
    {
        username: 'mathijs',
        password: '$2b$10$lMT7FxsqZi2VSGzAg.JD.Og/n7Eg.piuiusAyxhpR0lLEvQ2loGTK',
        email: 'mpattipeilohy1@gmail.com',
        type: 'user',
        secret: '33bedc447d70ed62a4b8f0cc5d0dee1ffcf9f3be84135cbc90ecfb7fca66934c829d493a0dbc16fbc6def6a5a6ad290b872261127d5a2c9bfb26c93b124afb05'
    }

];

module.exports = {
    userTypes,
    publicDefinition,
    privateDefinition,
    registerDefinition,
    data
};
