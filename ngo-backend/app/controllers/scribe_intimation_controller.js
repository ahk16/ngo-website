const express = require('express');
const router = express.Router();

const { ScribeInfo } = require('../models/scribe-intimation');
const {authenticateUser, authorizeUser} = require('../middlewares/authentication');

router.get('/', (req, res) => {
    ScribeInfo.find().then( info => {
        res.send(info);
    }).catch( err => {
        res.send(err);
    })
})

router.post('/',  (req, res) => {
    let body = req.body;
    let s = new ScribeInfo(body);
    s.save().then( info => {
        res.send({
            info,
            notice: "Successfully added the information"
        })
    }).catch( err => {
        res.send(err);
    })
})

router.put('/:id', (req, res) => {
    let id = req.params.id;
    let body = req.body;
    ScribeInfo.findByIdAndUpdate(id, { $set: body}, {new: true}).then( info => {
        res.send(info);
    }).catch( err => {
        res.send(err);
    })
})

router.delete('/:id', (req, res) => {
    let id =  req.params.id;
    ScribeInfo.findByIdAndDelete(id).then( info => {
        res.send({
            notice: 'Successfully deleted the information'
        })
    }).catch( err => {
        res.send(err);
    })
})


module.exports = {
    scribeInfoController: router
}