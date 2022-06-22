const express = require('express');
const router = express.Router();
const UserSchema = require('../models/User')

router.post('/', (req, res) => {
    const newUser = new UserSchema({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });
    console.log(newUser)
});

module.exports = router;