"use strict";
const jwt = require('jwt-simple'),
    moment = require('moment'),
    config = require('../config');

function createToken(user) {
    const payload = {
        sub: user._id,
        iat: moment().unix(),
        exp: moment().add(14, 'days').unix(),
    };
    return jwt.encode(payload, config.SECRET_TOKEN);
    //calling this func we'll get the encoded token
}

module.exports = createToken;