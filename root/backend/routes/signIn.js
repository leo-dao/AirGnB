const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post("/", async (req, res, next) => {

    // Checking if user already exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).json({ successs: false, error: 'Email not found' });

    // Checking if password is correct
    const validPass = user.compare(req.body.password);
    if (!validPass) return res.status(400).json({ successs: false, error: 'Incorrect password' });

    sendToken(user, 201, res);
})

const sendToken = (user, statusCode, res) => {
    const token = user.getSignedToken();
    res.status(statusCode).json({ success: true, token })
}

module.exports = router;