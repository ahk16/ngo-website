const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bloodInfoSchema = new Schema ({
    bloodGroup: {
        type: String,
       enum : ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'] 
    },
    location: {
        type: String,
        required: true
    },
    contactName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 10
    }
})

const BloodInfo = mongoose.model('BloodInfo', bloodInfoSchema);

module.exports = {
    BloodInfo
}