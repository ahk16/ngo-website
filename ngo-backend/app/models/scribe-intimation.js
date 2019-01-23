const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const datetime = require('node-datetime');

const scribeInfoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 10
    },
    language: {
        type: String,
        required: true
    },
    location : {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },

    time: {
        type: datetime,
        required: true
    }
})

const ScribeInfo = mongoose.model('ScribeInfo', scribeInfoSchema);

module.exports = {
    ScribeInfo
}