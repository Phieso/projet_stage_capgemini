'use strict';


let mongoose = require('mongoose'),
    User = mongoose.model('User');

exports.findById = function(id) {
    return new Promise(function(resolve, reject) {
        User.findById(id, function(err, user) {
            if (err)
                reject(err);
            resolve(user);
        });
    });
   
};

exports.find = function() {
    return new Promise(function(resolve, reject) {
        User.find({}, function(err, user) {
            if (err)
                reject(err);
            resolve(user);
        });
    });
   
};

exports.save = function(user){
    return new Promise(function(resolve, reject) {
        user.save(function(err, user) {
            if (err)
                reject(err);
            resolve(user);
        });
    });
}


exports.findOneByEmail = function(user){
    return new Promise(function(resolve, reject) {
        User.findOne({email: user.email}, function(err, user) {
            if (err)
                reject(err);
            resolve(user);
        });
    });
}

exports.findOneAndUpdate = function(id, user){
    return new Promise(function(resolve, reject) {
        User.findOneAndUpdate({ _id: id }, user, { new: true }, function(err, user) {
            if (err)
                reject(err);
            resolve(user);
        });
    });
}

exports.remove = function(id){
    return new Promise(function(resolve, reject) {
        User.remove({ _id: id }, function(err, user) {
            if (err)
                reject(err);
            resolve(user);
        });
    });
}
