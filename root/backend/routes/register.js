const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const UserSchema = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');
const upload = require('../middleware/upload')

router.post('/', upload.single('avatar'), async (req, res, next) => {

    const {
        name,
        email,
        location,
        id
    } = req.body;

    try {
        // Checking if user already exists
        const emailExist = await User.findOne({ email: email });
        if (emailExist) {
            return next(new ErrorResponse('Email is already being used'), 401)
        }

        const path = req.file.name;

        // Hashing password
        const salt = await bcrypt.genSalt(10);
        const securePassword = await bcrypt.hash(req.body.password, salt)

        const newUser = new UserSchema({
            name: name,
            email: email,
            password: securePassword,
            location: location,
            avatar: path,
            _id: id,
        });

        //await newUser.save()

    } catch (err) {
        next(err)
    };

});

module.exports = router;
