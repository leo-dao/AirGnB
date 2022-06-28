const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post("/", async (req, res) => {

    // Checking if user already exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Email not found');

    // Checking if password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send('Password is incorrect');

    const token = jwt.sign(
        {
            'name': user.name,
            'id': user._id
        }
        , 'temp_secret')

    return res.json({ status: 'ok', user: token });
})

module.exports = router;