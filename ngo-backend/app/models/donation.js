const mongoose = require('mongoose');
const {User} = require('./user');

const Schema = mongoose.Schema;

const donorsSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    location: {
        type: String
    },
    decription: {
        type: String,
        required: true
    },
    languages: {
        type: String,
        enum: ["Kannada", "English", "Hindi", "Sanskrit"];
    },
    availability: {
        type: String,
        enum: ["Weekdays","Weekend"]
    }
})

const Donors = mongoose.model('Donors', donorsSchema); 

module.exports = {
    Donors
}