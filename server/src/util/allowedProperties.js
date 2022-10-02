const statusCodes = require("http-status-codes");

const allowedProperties = (object, definition) => {
    for (let key in object){
        if(!definition.includes(key)){
            return statusCodes.BAD_REQUEST;
        }
    }
}
//a
module.exports = allowedProperties;