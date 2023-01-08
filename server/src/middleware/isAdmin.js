const statusCodes = require("http-status-codes");
const jwt = require("jsonwebtoken");

const isAdmin = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const payload = jwt.decode(token);
    if (payload.type === "admin") {
        next();
    } else {
        return res.status(statusCodes.UNAUTHORIZED).json({error: 'You are not authorized to do this action!'});
    }
}
module.exports = {
    isAdmin
};