const express = require('express');
const router = express.Router();

const { ObjectID } = require('mongodb');

const { BloodInfo } = require('../models/blood-intimation');

router.get('/', function(req, res) {
    BloodInfo.find().then(function(info) {
        res.send(info);
    }).catch(function(err) {
        res.send(err);
    })
});

router.post('/', function(req, res) {
    let body = req.body;
    let b = new BloodInfo(body);
    b.save().then(function(bloodinfo) {
        res.send( {
            bloodinfo,
            notice: "Successfully added the information"
        })
    }).catch(function(err) {
        res.send(err)
    })    

})

router.put('/:id', function(req, res) {
    let id = req.params.id;
    let body = req.body;
    BloodInfo.findByIdAndUpdate(id, { $set: body}, {new: true}).then(function(info) {
        res.send(info);
    }).catch(function(err) {
        res.send(err);
    })
})

router.delete('/:id', function(req, res) {
    let id = req.params.id;
    BloodInfo.findByIdAndDelete(id).then(function(info) {
        res.send({
            notice: 'Successfully deleted the information'
        })
    }).catch(function(err) {
        res.send(err);
    })
})

module.exports = {
    bloodInfoController : router
}