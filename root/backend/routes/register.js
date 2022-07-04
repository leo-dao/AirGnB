const express = require('express');
const router = express.Router();
const multer = require('multer');
const UserSchema = require('../models/User');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');

const storage = multer.diskStorage({
    destination: (req, file, cb) =>
        cb(null, './uploads/'),
    filename: (req, file, cb) =>
        cb(null, new Date().toISOString() + file.originalname)
})

const upload = multer({ storage, limits: { fileSize: (1024 ** 2) * 5 } });

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
