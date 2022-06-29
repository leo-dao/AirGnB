const express = require('express');
const router = express.Router();
const multer = require('multer');
const UserSchema = require('../models/User');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, './uploads/'),
    filename: (req, file, cb) => cb(null, new Date().toISOString() + file.originalname)
})

const upload = multer({ storage, limits: { fileSize: (1024 ** 2) * 5 } });

router.post('/', upload.single('avatar'), async (req, res) => {


    // Checking if user already exists
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).send('Email is already being used')

    // Hashing password
    const salt = await bcrypt.genSalt(10);
    const securePassword = await bcrypt.hash(req.body.password, salt)

    const newUser = new UserSchema({
        name: req.body.name,
        email: req.body.email,
        password: securePassword,
        location: req.body.location,
        avatar: req.file.path,
        _id: req.body.id,
    });

    newUser.save()
        .try(item => {
            res.send("item saved to database");
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

module.exports = router;
