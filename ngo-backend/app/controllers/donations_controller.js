const express = require('express');
const router = express.Router();

const { Donors } = require('../models/donation');
const {authenticateUser, authorizeUser} = require('../middlewares/authentication')

router.post('/', authenticateUser, authorizeUser, function(req, res) {
    let body = req.body;
    let d = new Donors(body);
    d.save().then(donor => {
        res.send({
            donor,
            notice: 'Successfully added'
        })
    }).catch( err => {
        res.send(err);
    })
})

module.exports = {
    donorsController : router
}