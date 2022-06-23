const express = require('express');
const router = express.Router();
const UserSchema = require('../models/User')

router.post('/', (req, res) => {
    const newUser = new UserSchema({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        _id: req.body.id,
    });
    newUser.save()
        .then(item => {
            res.send("item saved to database");
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

module.exports = router;