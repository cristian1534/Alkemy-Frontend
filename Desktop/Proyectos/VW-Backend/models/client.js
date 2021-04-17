const mongoose = require('mongoose');

//Client schema...

const Client = mongoose.model('Client', {
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    currentMoney: {
        type: String,
        required: true
    }
});

module.exports = { Client }