const authData = require("../data/authData");
const allowedProperties = require("../util/allowedProperties");
const bcrypt = require("bcrypt");

const auth = (jsonObject) => {
    return allowedProperties(jsonObject, authData.definition);
}

const getToken = (username, password) =>{

}

module.exports = {

};