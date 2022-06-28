const express = require('express');
const router = express.Router();
const UserSchema = require('../models/User');
const User = require('../models/User');
const bcrypt = require('bcrypt');

router.post("/", async (req, res) => {

    // Checking if user already exists
    const user = await User.findOne({ email: req.body.email });

    if (!user) return res.status(400).send('Email not found');

    const validPass = await bcrypt.compare(req.body.password, user.password);

    if (!validPass) return res.status(400).send('Password is incorrect');

})

module.exports = router;