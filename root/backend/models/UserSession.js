const mongoose = require('mongoose');

const UserSessionSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        default: '-1',
    },
    timestamp: {
        type: Date,
        required: true,
        default: Date.now(),
    },
});

module.exports = mongoose.model('UserSession', UserSessionSchema);;