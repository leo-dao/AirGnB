const express = require('express');
const router = express.Router();
const UserSchema = require('../models/User')
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })

router.post('/', upload.single('avatarj'), (req, res) => {

    console.log(req.body);

    console.log(req.file, "hello");

    const newUser = new UserSchema({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        location: req.body.location,
        _id: req.body.id,
    });
    newUser.save()
        .then(item => {
            res.send("item saved to database");
        })
        .catch(err => {
        });
});

module.exports = router;