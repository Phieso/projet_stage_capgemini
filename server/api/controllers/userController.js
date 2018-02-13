'use strict';


let mongoose = require('mongoose'),
    bcrypt = require('bcrypt'),
    jwt = require("jsonwebtoken"),
    User = mongoose.model('User');
let userRepository = require("../repository/userRepository.js");


exports.login = function(req, res) {
    if(!req.body.email || !req.body.password){
        return res.status(401).json({ message: 'Authentication failed. email or password is empty' });
    }
    userRepository.findOneByEmail(req.body)
    .then(function(user){
        if (!user.comparePassword(req.body.password)) {
            res.status(401).json({ message: 'Authentication failed. Wrong password.' });
        } else {
            let userView = {email : user.email, last_name : user.last_name, first_name : user.first_name};
            return res.json({ user: userView, token: jwt.sign({ email: user.email, last_name: user.last_name, _id: user._id, user_role: user.user_role }, process.env.SECRET_KEY.trim()) });
        }
    },function(error)
    {
        res.status(401).json({ message: 'Authentication failed. User not found.' });
    });
};

exports.loginRequired = function(req, res, next) {
    if (req.user) {
        next();
    } else {
        return res.status(401).json({ message: 'Unauthorized user!' });
    }
};

exports.getUsers = function(req, res) {
    userRepository.find()
    .then(function(users){
        res.json(users);
    },function(error){
        res.status(400).send(error);
    })
};


exports.postUser = function(req, res) {
    var new_user = new User(req.body);
    new_user.hash_password = bcrypt.hashSync(req.body.password, 10);
    userRepository.save(new_user)
    .then(function(user){
        res.json(user);
    },function(error){
        res.status(400).send(error);
    })
};


exports.getUser = function(req, res) {
    userRepository.findById(req.params.id)
    .then(function(user){
        res.json(user);
    },function(error){
        res.status(400).send(error);
    })
};

exports.putUser = function(req, res) {
    userRepository.findOneAndUpdate(req.params.id, req.body)
    .then(function(user){
        res.json(user);
    },function(error){
        res.status(400).send(error);
    })
};


exports.deleteUser = function(req, res) {
    userRepository.remove(req.params.id)
    .then(function(user){
        res.json({ message: 'User successfully deleted' });
    },function(error){
        res.status(400).send(error);
    })
};