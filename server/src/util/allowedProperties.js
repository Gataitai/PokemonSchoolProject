const statusCodes = require("http-status-codes");

const allowedProperties = (object, definition) => {
    for (let key in definition){
        if(!object.hasOwnProperty(definition[key])){
            return statusCodes.BAD_REQUEST;
        }
    }
    return object;
}

const filterProperties = (object, definition) => {
    return Object.keys(object)
        .filter(key => definition.includes(key))
        .reduce((obj, key) => {
            obj[key] = object[key];
            return obj;
        }, {});
}

module.exports = {
    allowedProperties,
    filterProperties
};