const statusCodes = require("http-status-codes");

const allowedProperties = (object, definition) => {
    for (let key in definition){
        if(!object.hasOwnProperty(definition[key])){
            return statusCodes.BAD_REQUEST;
        }
    }
    return object;
}

module.exports = allowedProperties;