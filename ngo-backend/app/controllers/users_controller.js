const express = require('express');
const router = express.Router();

const { User } = require('../models/user');
const {authenticateUser} = require('../middlewares/authentication');

router.post('/register', function(req, res) {
    let body = req.body;
    //console.log(body);
    let u = new User(body);
    u.save().then((function(user){
       return user.generateToken()
    })).then(function(token) {
        res.send({'x-auth': token}); //x- for custom header //sending it back to the client,storing in local storage.
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
        res.send(token);
    }).catch(function(err) {
        res.status(401).send(err);
    }) 
});

router.delete('/logout', authenticateUser, function(req, res) {
    const { user, token } = req;
    const tokenInfo = user.tokens.find(function(tokenItem) {
        return tokenItem.token == token;
    })

    //users.tokens.remove(tokenInfo._id);
   user.tokens.id(tokenInfo._id).remove()
    user.save().then((user) => {
        res.send({
            notice: 'Successfully logged out'
        })
    })
})


module.exports = {
    usersController: router
}