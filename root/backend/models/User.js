const mongooose = require('mongoose');

const UserSchema = new mongooose.Schema({
    name: {
        type: String,
        required: true,
        default: '',
    },
    email: {
        type: String,
        required: true,
        default: '',
    },
    password: {
        type: String,
        required: true,
        default: '',
    },
    location: {
        type: String,
        required: true,
        default: '',
    },
    avatar: {
        type: String
    },
    numAds: {
        type: Number,
        required: true,
        default: 0,
    },
    rating: {
        type: Number,
        required: true,
        default: -1,
    },
    _id: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now(),
    },
    isDeleted: {
        type: Boolean,
        required: true,
        default: false,
    }
});

module.exports = mongooose.model('User', UserSchema);