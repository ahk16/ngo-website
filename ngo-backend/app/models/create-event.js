const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const datetime = require('node-datetime');

const eventsSchema = new Schema ({
    eventName: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    organizerName: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 10
    },
    startTime: {
        type: datetime,
        required: true
    },
    endTime: {
        type: datetime,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const Events = mongoose.model('Events', eventsSchema);

module.exports = {
    Events
}




