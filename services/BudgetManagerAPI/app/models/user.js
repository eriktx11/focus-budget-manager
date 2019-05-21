const mongoose = require('mongoose'),
      bcrypt = require ('bcrypt');

const Schema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    clients: [{}]
}); 

