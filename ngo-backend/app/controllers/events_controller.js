const express = require('express');
const router = express.Router();

const { ObjectID } = require('mongodb');
const { Events } = require('../models/create-event');
const {authenticateUser, authorizeUser} = require('../middlewares/authentication');

router.get('/', function(req, res) {
    Events.find().then(function(events) {
        res.send(events);
    }).catch(function(err) {
        res.send(err);
    })
});

router.get('/:id', function(req, res) {
    let id = req.params.id;
    Events.findById(id).then(function(events) {
        res.send(events);
    }).catch(function(err) {
        res.send(err);
    })
})

router.post('/', authenticateUser, authorizeUser, function(req, res) {
    let body = req.body;
    let e = new Events(body);
    e.save().then(function(event) {
        res.send({
            event,
            notice: "Successfully added the event"
        })
    }).catch(function(err) {
        res.send(err);
    })
})

router.put('/:id', authenticateUser, authorizeUser, function(req, res) {
    let id = req.params.id;
    let body = req.body;
    Events.findByIdAndUpdate(id, { $set: body}, {new: true}).then(function(event) {
        res.send({
            event,
            notice: "Successfully edited"
        });
    }).catch(function(err) {
        res.send(err);
    })
})

router.delete('/:id', authenticateUser, authorizeUser, function(req, res) {
    let id = req.params.id;
    Events.findByIdAndDelete(id).then(function(event) {
        res.send({
            notice: 'Successfully deleted the event'
        })
    }).catch(function(err) {
        res.send(err);
    })
})

module.exports = {
    eventsController : router
}