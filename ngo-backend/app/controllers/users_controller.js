const express = require('express');
const router = express.Router();

const { User } = require('../models/user');

router.post('/register', function(req, res) {
    let body = req.body;
    let u = new User(body);
    u.save().then((function(user){
       return user.generateToken()
    })).then(function(token) {
        res.header('x-auth', token).send(); //x- for custom header //sending it back to the client,storing in local storage.
    }).catch(function(err) {
        res.send(err);
    })
});

router.post('/login', function(req, res) {
    let body = req.body;
    //console.log(body);
    User.findByCredentials(body.email, body.password).then(function(user) {
        return user.generateToken();
    }).then(function(token) {
        res.header('x-auth', token).send();
    }).catch(function(err) {
        res.status(401).send(err);
    }) 
});


module.exports = {
    usersController: router
}