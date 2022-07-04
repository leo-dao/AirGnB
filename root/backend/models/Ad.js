const mongoose = require('mongoose');

const AdSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        default: '',
    },
    description: {
        type: String,
        required: true,
        default: '',
    },
    price: {
        type: Number,
        required: true,
        default: 0,
    },
    _id: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    }
});

module.exports = mongoose.model('Ad', AdSchema);