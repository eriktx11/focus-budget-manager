const mongoose = require('mongoose'),
    jwt = require('jsonwebtoken'),
    config = require('@config');

const api = {};

api.login = (User) => (req, res) => {
    User.findOne({ username:req.body.username }, (error, user) => {
        if(error) throw error;

        if(!user) res.status(401).send({})
    })
}