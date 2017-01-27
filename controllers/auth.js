"use strict";
const mongoose = require('mongoose'),
    User = require('../models/user'),
    service = require('../services');

function signUp(req, res) {
    const user = new User({
        email: req.body.email,
        displayName: req.body.displayName
    });
    user.save((err)=> {
        if (err) res.status(500).send({message: `An error has occurred creating user: ${err}`});
        return res.status(200).send({token: service.createToken}); //Create token based on user
    })
}
function signIn(req, res) {

}

module.exports = {
    signUp,
    signIn
};