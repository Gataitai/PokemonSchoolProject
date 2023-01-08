const publicDefinition = [
    "username",
    "email",
    "type"
]

const registerDefinition = [
    "username",
    "password"
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
        username: 'admin',
        password: '$2b$10$lMT7FxsqZi2VSGzAg.JD.Og/n7Eg.piuiusAyxhpR0lLEvQ2loGTK',
        type: 'admin',
        secret: '33bedc447d70ed62a4b8f0cc5d0dee1ffcf9f3be84135cbc90ecfb7fca66934c829d493a0dbc16fbc6def6a5a6ad290b872261127d5a2c9bfb26c93b124afb05',
        wonAuctions: [],
    },
    {
        username: 'user',
        password: '$2b$10$t5LtV30sQhnR4l2TnxQZKu2n2tBqQXLvGE71kNurYfGTuha4rnTfG',
        secret: 'e2b48762f1096aaf86fef148e3002721f87eb9bd754975fb1626b4fbb05b2ebbcd7689b79a389f266872ac3e5858394d0c29aad84e76970f44249e4916a3a578',
        type: 'user',
        wonAuctions: []
    }
];

module.exports = {
    userTypes,
    publicDefinition,
    privateDefinition,
    registerDefinition,
    data
};
